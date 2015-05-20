import scala.util.Random

object Code {
    // Returns "Hello World!"
    def helloWorld() : String = ???

    // An endless stream of fibionacci numbers. Hint: current #:: ???
    def allFib(current:Int, next:Int) : Stream[Int] = ???

    // Return a stream of N fibonacci numbers starting at the beginning
    def firstNFibonacciNumbers(n:Int): Stream[Int] = ???

    // Determine if n is a Fibonacci number
    def isFibNumber(n: Int): Boolean = ???

    // Sum all the Fibonacci number between lower and upper inclusive.
    def sumSomeFib(lower: Int, upper: Int): Int = ???

    // Determine if the text occurs somewhere in the stream. Code as if the stream was accessing a very large file that would not fit in memory.
    def isTextInStream(stream: Stream[String], text: String): Boolean = ???


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
    def solveSudoku(sudokuBoard: Array[Int]): Array[Int] = ???

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
    def monkeysAndCoconuts(sailors: Int) : String = ???



}