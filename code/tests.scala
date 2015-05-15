object Tests {
    def helloWorldTest() {
        Assert.areEqual("Hello World!", Code.helloWorld());
    }
    def monkeysAndCoconutsTest() {
        Assert.areEqual(3121, Code.monkeysAndCoconuts(5));
    }

    def isTextInStreamTest() = {
        def stringToStream(text: String, chunkSize: Int) : Stream[String] = {
            if (text == null || text.length() == 0)
                Stream.empty
            else
                text.substring(0, Math.min(text.length(),chunkSize)) #::
                  stringToStream(text.substring(Math.min(text.length(),chunkSize)), chunkSize)
        }
        val phrase1 = "The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made."
        val phrase2 = "We now come to the decisive step of mathematical abstraction: we forget about what the symbols stand for. ...[The mathematician] need not be idle; there are many operations which he may carry out with these symbols, without ever having to look at the things they stand for."
        Assert.isTrue(Code.isTextInStream(stringToStream(phrase1, 10), "are chiefly these three: 1. Combining several"))
        Assert.isTrue(Code.isTextInStream(stringToStream(phrase2, 10), "abstraction: we forget about what the symbols stand for"))
        Assert.isFalse(Code.isTextInStream(stringToStream(phrase1, 10), "abstraction: we forget about what the symbols stand for"))
        Assert.isFalse(Code.isTextInStream(stringToStream(phrase2, 10), "are chiefly these three: 1. Combining several"))
    }
}