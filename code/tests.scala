object Tests {
    def helloWorldTest() {
        Assert.areEqual("Hello World!", Code.helloWorld());
    }
    def monkeysAndCoconutsTest() {
        Assert.areEqual(3121, Code.monkeysAndCoconuts(5));
    }
}