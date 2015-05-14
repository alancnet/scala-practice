var assert = require('./assert.js');
var code = require('../code.js');
var tests = {
    helloWorldTest: function() {
        assert.areEqual("Hello World!", code.helloWorld());
    },
    stream: function(text) {
        var head = {};
        var current = head;
        var chunksize = 10;
        var previous;
        for (var i = 0; i < text.length; i += 10) {
            var chunk = text.substr(i, chunksize);
            current.data = chunk;
            current.next = {};
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return head;
    },
    isTextInStreamTest: function() {
        assert.isTrue(code.isTextInStream(this.stream("Whatever Whatever Whatever Whatever Whatever Whatever Whatever FINDME Whatever"), "FINDME"));
        assert.isTrue(code.isTextInStream(this.stream("Whatever FINDME1238901238901230479823798 Whatever"), "FINDME1238901238901230479823798"));
        assert.isFalse(code.isTextInStream(this.stream("Whatever FINDME Whatever"), "Hello World"));
    }
};
module.exports = tests;
    
