/*Coffee Shop
Write a class called CoffeeShop, which has three instance variables:
name : a string (basically, of the shop)
menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
orders : an empty array
and seven methods:
addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
fulfillFirstOrder: if the orders array is not empty, return "The {first item} is ready!" after a set ammount of time. If the orders array is empty, return "All orders have been fulfilled!"
fulfillAllOrders: if the orders array is not empty, print 
listOrders: returns the list of orders taken, otherwise, an empty array.
dueAmount: returns the total amount due for the orders taken.
cheapestItem: returns the name of the cheapest item on the menu.
drinksOnly: returns only the item names of type drink from the menu.
foodOnly: returns only the item names of type food from the menu.
IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order, print one order at a time in an interval of 5 seconds, finally return  "All orders have been fulfilled!" after done serving.
Examples
tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
tcs.dueAmount() ➞ 2.17
tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served
tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted
tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable
tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
*/
console.log("hi");


function CoffeeShop(){
  
    var instance={}
    this.name=name,
    this.menu=menu,
    this.orders=[],
    instance.addOrder=addOrder,
    instance.fulfillFirstOrder=fulfillFirstOrder,
    instance.fulfillAllOrders=fulfillAllOrders,
    instance.listOrders=listOrders,
    instance.dueAmount=dueAmount,
    instance.cheapestItem=cheapestItem,
    instance.drinksOnly=drinksOnly,
    instance.foodOnly=foodOnly
    return instance;
}

var addOrder=function(item){
    var  menuItems = this.menu.map(menuItem => menuItem.item) // map() n3awadh fil menu item jdid 
    if (menuItems.includes(item)) {
      this.orders.push(item);
      return "Order added!";
    } else {
      return "This item is currently unavailable!"
    }
  }
    var fulfillFirstOrder=function(){
       var  firstOrder = this.orders[0];
    if (this.orders.length > 0) {
        this.orders.shift();
        setTimeout(() => {
          return "The " + firstOrder +" is ready!"
        }, 3000);
      } else {
        return "All orders have been fulfilled!"
          }
       }

   var fulfillAllOrders=function(){
    while (this.orders.length > 0) {
        this.fulfillFirstOrder()
        }
        return "All orders have been fulfilled!"
        }

    var listOrders=function(){
          return this.orders
        }
    var dueAmount=function(){
        var total = this.orders.reduce((acc, cur) => {
            var  menuItem = this.menu.find(menuItem => menuItem.item === cur)
            return acc + menuItem.price
          }, 0)
          return total.toFixed(2);
        }
    var cheapestItem=function () {
            var cheapest = this.menu[0]
            for (var  i = 1; i < this.menu.length; i++) {
              if (this.menu[i].price < cheapest.price) {
                cheapest = this.menu[i]
              }
            }
            return cheapest.item
        }
        
    var drinksOnly=function () {

            return this.menu.filter(menuItem => menuItem.type === "drink")
        }
        
    var foodOnly =function (){

            return this.menu.filter(menuItem => menuItem.type === "food")
        }
        

