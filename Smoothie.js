/*Fruit Smoothie
Create a class Smoothie and do the following:

Create a constructor property called ingredients.
Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to two decimal places.
Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence. If there are multiple ingredients, add the word "Fusion" to the end but otherwise, add "Smoothie". Remember to change "-berries" to "-berry". See the examples below.
Ingredient	Price
var ingredient = [
  { ingredient: Strawberries, price: 1.5 },
  { ingredient: Banana, price: 0.5 },
  { ingredient: Mango, price: 2.5 },
  { ingredient: Blueberries, price: 1.0 },
  { ingredient: Raspberries, price: 1.0 },
  { ingredient: Apple, price: 1.75 },
  { ingredient: Pineapple, price: 3.5 },
];

Examples
s1 =  Smoothie(["Banana"])

s1.ingredients ➞ ["Banana"]

s1.getCost() ➞ "$0.50"

s1.getPrice() ➞ "$1.25"

s1.getName() ➞ "Banana Smoothie"
s2 = Smoothie(["Raspberries", "Strawberries", "Blueberries"])

s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]

s2.getCost() ➞ "$3.50"

s2.getPrice() ➞ "$8.75"

s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion"

*/
console.log("hi");

function Smoothie() {
    var myObj={}
    this.ingredients = ingredients
    myObj.getCos=getCos,
    myObj.price=getPrice,
    myObj.getName=getName
    return myObj
  }


  var getCos=function () {
    var  cost = 0
    for (var ingredient of this.ingredients) {
      cost += ingredientPrices[ingredient];  
    }
    return "$"+ cost.toFixed(2);
  }

  var getPrice=function() {
      cost = number(this.getCost().substring(1)); // transformation string to number with remove "$"
      price = cost + cost * 1.5;
    return "$" +price.toFixed(2)
  }

 var  getName=function () {
    var  ingredients = this.ingredients.map((ingredient) => 
      ingredient.replace("berries", "berry") // remplacement "-berries" to "-berry"
    );
    ingredients.sort()// tartib array 

  var  name = ingredients.join(" ");
    if (ingredients.length > 1) { // array mouch faragh 
      name += " Fusion";
    } else {
      name += " Smoothie"
    }
    return name
  }




