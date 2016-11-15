var assert = require('./assert.js');
var code = require('./level1code.js');
var testData = require('./testData.js');

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
        var actual = code.getValidData(testData.someValidAndInvalidData);
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
    },
    getSortedDataTest: function() {
        var actual = code.getSortedData(testData.dataToSort);
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
    },
    getLeastFutureOrMostRecentTest: function() {
        var actual1 = code.getLeastFutureOrMostRecent(testData.leastFutureOrMostRecentData1);
        assert.isDeepEqual(
            {
                eventName: 'Amazing Marathon',
                eventDate: '2017-6-21'
            },
            actual1
        );
        var actual2 = code.getLeastFutureOrMostRecent(testData.leastFutureOrMostRecentData2);
        assert.isDeepEqual(
            {
                eventName: 'Amazing Marathon',
                eventDate: '2018-6-21'
            },
            actual2
        );
        var actual3 = code.getLeastFutureOrMostRecent(testData.leastFutureOrMostRecentData3);
        assert.isDeepEqual(
            {
                eventName: 'Amazing Marathon',
                eventDate: '2016-6-21'
            },
            actual3
        );
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

        Promise.all([actual1, actual2, actual3]).then((values) => {
          assert.isDeepEqual(expected, values[0]);
          assert.isDeepEqual(expected, values[1]);
          assert.isDeepEqual(expected, values[2]);
        })
    }
};
module.exports = level1tests;
