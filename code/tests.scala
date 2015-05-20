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
        Assert.isTrue(Code.isTextInStream(stringToStream(phrase1, 10), phrase1.substring(37,53)))
        Assert.isTrue(Code.isTextInStream(stringToStream(phrase2, 10), phrase2.substring(30,45)))
        Assert.isTrue(Code.isTextInStream(stringToStream(phrase1, 7), phrase1.substring(37,53)))
        Assert.isTrue(Code.isTextInStream(stringToStream(phrase2, 15), phrase2.substring(30,45)))
        Assert.isFalse(Code.isTextInStream(stringToStream(phrase1, 10), phrase2.substring(37,53)))
        Assert.isFalse(Code.isTextInStream(stringToStream(phrase2, 10), phrase1.substring(30,45)))
        Assert.isFalse(Code.isTextInStream(stringToStream(phrase1, 20), phrase2.substring(37,53)))
        Assert.isFalse(Code.isTextInStream(stringToStream(phrase2, 30), phrase1.substring(30,45)))
    }

    def isFibTest() = {
        def assertNisFib (n:Int, is:Boolean) = Assert.isTrue(Code.isFibNumber(n) == is, f"Is $n a fib? $is; But you had ${!is}")
        assertNisFib(0,true)
        assertNisFib(1,true)
        assertNisFib(2,true)
        assertNisFib(3,true)
        assertNisFib(4,false)
        assertNisFib(5,true)
        assertNisFib(6,false)
        assertNisFib(7,false)
        assertNisFib(8,true)
        assertNisFib(9,false)
    }

    def allFibTest() = {
        Assert.areEqual(
            Code.allFib(0, 1).take(20).mkString(","), 
            "0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181"
        )
    }

    def firstNFibonacciNumbersTest() = {
        def assertFirstNFib (n:Int, expected:Stream[Int]) = {
            val actual = Code.firstNFibonacciNumbers(n).toList ; Assert.isTrue(actual == expected, f"The first $n fib are $expected; But you had $actual")
        }
        assertFirstNFib(3, Stream(0, 1, 1))
        assertFirstNFib(6, Stream(0, 1, 1, 2, 3, 5))
        assertFirstNFib(9, Stream(0, 1, 1, 2, 3, 5, 8, 13, 21))
    }

    def sumSomeFibTest() = {
        def assertSumSomeFib (lower: Int, upper: Int, expected: Int) = {
            val actual = Code.sumSomeFib(lower,upper); Assert.isTrue(actual == expected, f"The sum of all fib from $lower to $upper is $expected but you had $actual")
        }
        assertSumSomeFib(0,10,20)
        assertSumSomeFib(10,20,13)
        assertSumSomeFib(30,100,178)
        assertSumSomeFib(100,1000,2351)
        assertSumSomeFib(0,500,986)
    }

    def solveSudokuTest() = {
        def sudokuToString (board: Array[Int]): String = {
            var length = Stream.from(2).filter(x=>x*x>=board.length).head
            val hline = "+" + Seq.range(0, 6 + length * 2)
              .map(x=> if(x%8==7)"+" else "-")
              .foldLeft(StringBuilder.newBuilder)((sb,s)=>{sb.append(s)}).toString()+"\n"
            val sb = board.foldLeft((StringBuilder.newBuilder,0))((bi,item) => {
                val b = bi._1
                var i = bi._2
                b.append(if (i%length == 0 && i % (length*3) == 0) hline else "")
                b.append(if (i%length == 0 && item == 0) f"|  "
                         else if (i%3 != 2 && i%length != length-1 && item == 0) f"  "
                         else if (i%3 == 2 && i%length != length-1 && item == 0) f"   |"
                         else if (item == 0) f"   |%n"
                         else if (i%length == 0) f"| $item%1d"
                         else if (i%3 != 2 && i%length != length-1) f" $item%1d"
                         else if (i%3 == 2 && i%length != length-1) f" $item%1d |"
                         else f" $item%1d |%n")
                (b , i + 1)})
            "\n" + sb._1.append(hline).toString() + "\n"
        }
        def assertSudokuSolves (inputBoard: Array[Int], checkBoard: (Array[Int]=>Boolean)) = {
            val boardCopy = inputBoard.clone()
            val actual = Code.solveSudoku(boardCopy)
            val solved = checkBoard(actual)
            lazy val errorOutput = StringBuilder.newBuilder.append("Failed to solve the board:\n")
                                                            .append("input:")
                                                            .append(sudokuToString(inputBoard))
                                                            .append("result:")
                                                            .append(sudokuToString(actual)).toString()
            Assert.isTrue(solved, errorOutput)
        }
        def boardBadColsAndRows(board: Array[Int]): (Stream[Int],Stream[Int])={
            def inRow(board: Array[Int],idx:Int): Set[Int] ={
                val rowIdx = (0 to 8).filter(x=> x*9 <= idx).max
                board.splitAt(rowIdx*9)._2.take(9).toSet
            }
            def inCol(board: Array[Int],idx:Int): Set[Int] = {
                val colIdx = idx % 9
                board.scanLeft((-1,0))((idxitem, item)=>(idxitem._1 + 1,item))
                  .filter((idxitem) => idxitem._1 % 9 == colIdx)
                  .map(idxitem=>idxitem._2).toSet
            }
            def badColumns(board:Array[Int]): Stream[Int]= {
                def sumCheckColumn(board: Array[Int], col: Int): Boolean={
                    inCol(board,col*9).toList.length == 9
                }
                Stream.from(0).takeWhile(x=>x<10).filter(col => !sumCheckColumn(board,col))
            }
            def badRows(board:Array[Int]): Stream[Int]= {
                def sumCheckRow(board: Array[Int], row: Int): Boolean={
                    inRow(board,row*9).toList.length == 9
                }
                Stream.from(0).takeWhile(x=>x<10).filter(row => !sumCheckRow(board,row))
            }
            (badColumns(board),badRows(board))
        }
        def doesBoardSolve(board: Array[Int]): Boolean ={
            val badColsBadRows = boardBadColsAndRows(board)
            badColsBadRows._1.length + badColsBadRows._2.length == 0
        }

//        assertSudokuSolves(
//            Array(  0,2,1,0,0,0,0,0,4,
//                    4,0,0,8,0,0,0,0,0,
//                    0,0,0,7,0,4,5,0,0,
//                    0,0,6,0,1,0,0,9,0,
//                    0,9,0,0,0,0,0,7,0,
//                    0,4,0,0,9,0,6,0,0,
//                    0,0,3,9,0,2,0,0,0,
//                    0,0,0,0,0,3,0,0,1,
//                    9,0,0,0,0,0,8,5,0), doesBoardSolve)

        assertSudokuSolves(Array(0,2,0,1,7,8,0,3,0,
                                 0,4,0,3,0,2,0,9,0,
                                 1,0,0,0,0,0,0,0,6,
                                 0,0,8,6,0,3,5,0,0,
                                 3,0,0,0,0,0,0,0,4,
                                 0,0,6,7,0,9,2,0,0,
                                 9,0,0,0,0,0,0,0,2,
                                 0,8,0,9,0,1,0,6,0,
                                 0,1,0,4,3,6,0,5,0), doesBoardSolve)
    }
}