var assert = require('./assert.js');
var code = require('./level1code.js');
var testData = require('./testData.js');
var _ = require('./lib/lodash');

var level1tests = {
    helloWorldTest: function () {
        assert.areEqual("Hello World!", code.helloWorld());
    },
    sumTest: function () {
        assert.areEqual(10, code.sum(0, 10));
        assert.areEqual(10, code.sum(2, 8));
        assert.areEqual(10, code.sum(6, 4));
        assert.areEqual(10, code.sum(5, 5));
    },
    productTest: function () {
        assert.areEqual(100, code.product(1, 100));
        assert.areEqual(100, code.product(2, 50));
        assert.areEqual(100, code.product(4, 25));
        assert.areEqual(100, code.product(5, 20));
    },
    assertEqualArrays: function (expected, actual) {
        for (var i = 0; i < expected.length; i++) {
            assert.areEqual(expected[i], actual[i]);
        }
        assert.areEqual(expected.length, actual.length);
    },
    productAllTest: function () {
        var expected = [2, 6, 12, 20, 30];
        var actual = code.productAll([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]);
        this.assertEqualArrays(expected, actual);
    },
    sumAllTest: function () {
        var actual = code.sumAll([1, 9, 2, 8, 3, 7, 4, 6, 5, 5, 50]);
        assert.areEqual(100, actual);
    },
    getValidDataTest: function () {
        var original = testData.someValidAndInvalidData;
        var theirs = _.cloneDeep(testData.someValidAndInvalidData);
        var actual = code.getValidData(theirs);
        assert.isDeepEqual(
            [
                {
                    eventName: 'Neat Event 1',
                    eventDate: '2016-7-20'
                },
                {
                    eventName: 'Neat Event 3',
                    eventDate: '2014-7-28'
                },
                {
                  eventName: 'Neat Event 6',
                  eventDate: '2012-8-1'
                }
            ],
            actual
        );
        assert.isDeepEqual(original, theirs);
    },
    getSortedDataTest: function() {
        var original = testData.dataToSort;
        var theirs = _.cloneDeep(testData.dataToSort);
        var actual = code.getSortedData(theirs);
        assert.isDeepEqual(
            [
                {
                  eventName: 'Cool 10k B',
                  eventDate: '2017-6-21'
                },
                {
                  eventName: 'Cool 10k E',
                  eventDate: '2017-6-21'
                },
                {
                  eventName: 'Cool 10k A',
                  eventDate: '2016-7-20'
                },
                {
                  eventName: 'Cool 10k D',
                  eventDate: '2015-8-1'
                },
                {
                  eventName: 'Cool 10k C',
                  eventDate: '2014-7-28'
                }
            ],
            actual
        );
        assert.isDeepEqual(original, theirs);
    },
    getLeastFutureOrMostRecentTest: function() {
        var original1 = testData.leastFutureOrMostRecentData1;
        var original2 = testData.leastFutureOrMostRecentData2;
        var original3 = testData.leastFutureOrMostRecentData3;

        var theirs1 = _.cloneDeep(testData.leastFutureOrMostRecentData1);
        var theirs2 = _.cloneDeep(testData.leastFutureOrMostRecentData2);
        var theirs3 = _.cloneDeep(testData.leastFutureOrMostRecentData3);


        var actual1 = code.getLeastFutureOrMostRecent(theirs1);
        assert.isDeepEqual(
            {
                eventName: 'Amazing Marathon',
                eventDate: '2017-6-21'
            },
            actual1
        );
        var actual2 = code.getLeastFutureOrMostRecent(theirs2);
        assert.isDeepEqual(
            {
                eventName: 'Amazing Marathon',
                eventDate: '2018-6-21'
            },
            actual2
        );
        var actual3 = code.getLeastFutureOrMostRecent(theirs3);
        assert.isDeepEqual(
            {
                eventName: 'Amazing Marathon',
                eventDate: '2016-6-21'
            },
            actual3
        );

        assert.isDeepEqual(original1, theirs1);
        assert.isDeepEqual(original2, theirs2);
        assert.isDeepEqual(original3, theirs3);
    },
    getCombinedEventDataTest: function () {
        var expected = [
            {
              eventName: 'Event Name 1a',
              eventDate: '2016-5-24'
            },
            {
              eventName: 'Event Name 2b',
              eventDate: '2015-6-3'
            },
            {
              eventName: 'Event Name 2a',
              eventDate: '2014-6-1'
            }
        ];
        var actual1 = code.getCombinedEventData(testData.getPromise1(), testData.getPromise2());
        var actual2 = code.getCombinedEventData(testData.getPromise1(400), testData.getPromise2(200));
        var actual3 = code.getCombinedEventData(testData.getPromise1(100), testData.getPromise2(100));

        var resolved = false;
        var everything = Promise.all([actual1, actual2, actual3])
        var shortcut = null;
        var timeout = new Promise((accept, reject) => {
            shortcut = accept;
            setTimeout(function() {
                if (resolved) accept();
                else reject("Timeout");
            }, 2000);
        })
        everything.then(() => {
            resolved = true;
            shortcut && shortcut();
        })

        return Promise.all([everything, timeout]).then((junk) => {
          const values = junk[0];
          assert.isDeepEqual(expected, values[0]);
          assert.isDeepEqual(expected, values[1]);
          assert.isDeepEqual(expected, values[2]);
        })
    }
};
module.exports = level1tests;
