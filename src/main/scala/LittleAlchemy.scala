object LittleAlchemy {
  def combine(element1:String, element2:String) = {
    val recipe = Array(element1, element2).sorted.mkString(",");
    if (Recipes.byRecipe.contains(recipe)) Recipes.byRecipe(recipe);
    else Array.empty[String]
  }
  def getBaseElements = Recipes.baseElements;

}
