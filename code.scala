import scala.util.Random

object Code {
    // Returns "Hello World!"
    def helloWorld() : String = {
        "Hello World!"
    }

    // This function should sum all of the values in the input sequence in parallel way to
    // take advantage of multiple cores
    // This function is broken. Fix it so it always returns the correct result.
    def imparitiveSumToFunctional(list:scala.collection.parallel.ParSeq[Int]):Int ={
        var accumulator = 0
        list.map(x=> {accumulator += x; x})
        return accumulator
    }

    // return a stream that contains every integer starting at 'start'
    def countFrom(start:Int) : Stream[Int] = Stream.from(start+1)

    // return a stream that contains the square of every integer starting at 'start'
    def squaresFrom(start:Int) : Stream[Int] = Stream.from(start).map(x=> x*x)

    // return a stream that contains the product of factors from two streams
    def productOfStreams(aFactors:Stream[Int], bFactors:Stream[Int]) : Stream[Int] = aFactors.zip(bFactors).map(pair => pair._1 * pair._2)

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


    // A standard Sudoku puzzle contains 81 cells, in a 9 by 9 grid, and has 9 zones, each zone being the
    // intersection of 3 rows and 3 columns. Each cell may contain a number from one to nine; each number
    // can only occur once in each zone, row, and column of the grid. At the beginning of the game, many
    // cells begin with numbers in them, and the goal is to fill in the remaining cells. -- wikipedia

    // Solve any 9x9 Sudoku board that is input as an array.
    // Array values of 0 represent cells that must be solved for.
    // Array values > 0 must not be modified.
    // To solve: each number 1-9 must exist exactly 9 times, and never in the same row or same column as its self
    // The only valid values are 1-9
    // The more elegant the approach the better
    def solveSudoku(sudokuBoard: Array[Int]): Array[Int] = {
        throw new Exception("Not Implemented")
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
    def monkeysAndCoconuts(sailors: Int) : String = {
        throw new Exception("Not Implemented");
    }



}