
object Level1Tests {

  def helloWorldTest() {
    Assert.areEqual("Hello World!", Level1Code.helloWorld());
  }

  def countFromTest() = {
    val actual1 = Level1Code.countFrom(0).take(10000)
    val actual2 = Level1Code.countFrom(10000).take(256)
    Assert.isTrue(actual1.min == 0 && actual1.max == 9999 && actual1.length == 10000)
    Assert.isTrue(actual2.min == 10000 && actual2.max == 10255 && actual2.length == 256)
  }

  def squaresFromTest() = {
    val actual1 = Level1Code.squaresFrom(0).take(10000)
    val actual2 = Level1Code.squaresFrom(10000).take(500)
    Assert.isTrue(actual1.min == 0 && actual1.max == 99980001 && actual1.length == 10000, f"${actual1.min} ${actual1.max}${actual1.length}")
    Assert.isTrue(actual2.min == 100000000 && actual2.max == 110229001 && actual2.length == 500, f"${actual2.min} ${actual2.max} ${actual2.length}")
  }

  def productOfStreamsTest() = {
    val source1 = Level1Code.countFrom(0).take(100)
    val source2 = Level1Code.countFrom(10).take(100)
    val actual = Level1Code.productOfStreams(source1, source2)
    Assert.isTrue(actual.min == 0 && actual.max == 10791 && actual.length == 100, f"${actual.min} ${actual.max}${actual.length}")
  }

}