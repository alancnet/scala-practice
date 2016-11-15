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

};
module.exports = level1tests;
