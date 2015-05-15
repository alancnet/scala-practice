object Code {
    // Returns "Hello World!"
    def helloWorld() : String = {
        throw new Exception("Not Implemented");
    }

    //Monkeys and Coconuts https://youtu.be/U9qU20VmvaU?t=43s
    //
    //<n> sailors are stranded on a desert island with one monkey.
    //The sailors gather coconuts into a pile and go to sleep.
    //
    //That night (without the knowledge of the others) each sailor in turn
    //separates out equal shares of coconuts with one left over (which they throw to the monkey)
    //then they hide their own share and throw the rest back on the pile.
    //
    //The next morning, they all separate the remaining pile and there are no coconuts left for the monkey.
    //How many coconuts did they have in the pile the night before?
    def monkeysAndCoconuts(sailors:Int) : String = {
        throw new Exception("Not Implemented");
    }

    def isTextInStream(stream: Stream[String], text: String) : Boolean = {
        val charsMatched = stream.flatten(chunk => chunk)
                          .foldLeft(0) (
                                (pos, ch) => if (pos == text.length() -1) pos else if (text(pos) == ch) pos+1 else 0
                            )
        charsMatched == text.length() -1
    }
}