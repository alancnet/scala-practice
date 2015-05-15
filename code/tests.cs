using System;

static class Tests {
    public static void HelloWorldTest() {
        Assert.AreEqual("Hello World!", Code.HelloWorld());
    }
    public static void MonkeysAndCoconutsTest() {
        Assert.AreEqual(3121, Code.MonkeysAndCoconuts(5));
    }
}