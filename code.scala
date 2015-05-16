object Code {
    // Returns "Hello World!"
    def helloWorld() : String = {
        "Hello World!"
    }

    def allFib(current:Int, next:Int) : Stream[Int] = current #:: allFib(next,current+next)

    // Return a stream of N fibonacci numbers starting at the beginning
    def firstNFibonacciNumbers(n:Int): Stream[Int] = allFib(0,1).take(n)

    // Determine if n is a Fibonacci number
    def isFibNumber(n: Int): Boolean = allFib(0,1).takeWhile(x=>x<=n).contains(n)

    // Sum all the Fibonacci number between lower and upper inclusive.
    def sumSomeFib(lower: Int, upper: Int): Int = allFib(0,1).filter(x=> x>=lower).takeWhile(x=>x<=upper).sum

    // Determine if the text occurs somewhere in the stream. Code as if the stream was accessing a very large file that would not fit in memory.
    def isTextInStream(stream: Stream[String], text: String): Boolean =
        text.length() == stream.flatten(chunk => chunk)
          .foldLeft(0) (
            (len, ch) => if (len == text.length()-1) len
            else if (text(len) == ch) len+1
            else 0
        ) + 1

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
    def monkeysAndCoconuts(sailors: Int) : String = {
        throw new Exception("Not Implemented");
    }



}