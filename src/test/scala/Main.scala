
object Main {

  def test(m: java.lang.reflect.Method, o: java.lang.Object) {

    try {
      m.invoke(o);
      println("PASS:" + m.getName)
    } catch {
      case e: Exception =>
        println("FAIL:" + m.getName + ": " + e.getCause.getMessage)
    }
  }

  def main(args: Array[String]) {

    println("\nScala Tests:");

    val tests = Array(Level1Tests, Level2Tests, Level3Tests)
    
    tests.foreach { o =>
      o
        .getClass
        .getMethods
        .sortWith(_.getName < _.getName)
        .filter(m => m.getName.endsWith("Test"))
        .map(m => {
          test(m, o);
          0
        });
    }

    println("Done!");
  }
}


