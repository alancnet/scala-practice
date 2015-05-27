var assert = require('./assert.js');
var code = require('../src/js/level2code.js');
var level2tests = {
    helloWorldTest: function() {
        assert.areEqual("Hello World!", code.helloWorld());
    }
};
module.exports = level2tests;