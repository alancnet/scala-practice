using System;
using System.Collections.Generic;

static class Tests {
    public static void HelloWorldTest() {
        Assert.AreEqual("Hello World!", Code.HelloWorld());
    }
    public static IEnumerable<string> Stream(string text) {
        int chunksize = 10;
        for (var i = 0; i < text.Length; i += chunksize) {
            yield return text.Substring(i, Math.Min(text.Length - i, chunksize));
        }
    }
    public static void IsTextInStreamTest() {
        Assert.IsTrue(Code.IsTextInStream(Stream("Whatever FINDME Whatever").GetEnumerator(), "FINDME"));
        Assert.IsTrue(Code.IsTextInStream(Stream("Whatever FINDME1238901238901230479823798 Whatever").GetEnumerator(), "FINDME1238901238901230479823798"));
        Assert.IsFalse(Code.IsTextInStream(Stream("Whatever FINDME Whatever").GetEnumerator(), "Hello World"));
    }
    
}