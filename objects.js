/*****************************  1  ***********************/
// A
// Create an object called "driver" that holds your first name,
// last name, fun fact and your age.
// Then, create an object called "navigator" that contains the same
// properties for your pair.// A
var driver = {
  firstName: "Wassim",
  lastName: "Jaziri",
  funFact: "I play fifa in my free time",
  age: 26,
  favoriteTVShow: "freinds "
  }
  
 var navigator = {
  firstName: "Rafik",
  lastName: "Mhadhbi",
  funFact: "I am tennis player",
  age: 25,
  favoriteTVShow: "blacklist"
  }
  


// B
// Add a property called "favoriteTVShow" to both of the objects that
// you have created that contains your favorite TV Show
// driver: using the DOT notation
// navigator: using the BRACKET notation
driver.favoriteTVShow = "The Tv show"
navigator["favoriteTVShow"] = "The Tv show "


// C
// Your pair just spoiled the last season of your favorite TV show and you do not
// like it anymore. Update the value of favoriteTVShow to "Choufli Hall"
driver.favoriteTVShow = "Choufli Hall"
navigator["favoriteTVShow"] = "Choufli Hall"


// D
// Help your instructional team know who is driving and who is navigating by 
// creating a function called currentPair that takes two objects ( a driver and a navigator)
// as parameters and displays both of your full names and your roles.
// example: "Majd Eddine Kouira is driving and Yasmine Ghoulem is navigating"
function currentPair(driver, navigator) {

  console.log(driver.firstName + driver.lastName + "is driving and  "+navigator.firstName + navigator.lastName +"is navigating")
  }
  
  currentPair(driver, navigator)

// E
// Create a function called sumOfAges that takes two objects and returns the sum of your ages
function sumOfAges(person1, person2) {
  return person1.age + person2.age
  }
  
  console.log(sumOfAges(driver, navigator))


/*****************************  2  ***********************/


// A
// Now, lets work on helping the instructional team keep track of all the students
// Create a factory function called "makeStudent" that creates a student with the following
// properties: firstName, lastName, age and fun fact
function makeStudent(firstName,lastName,age,funFact){
var myObj={}
myObj.firstName=firstName,
myObj.lastName=lastName,
myObj.age=age,
myObj.funFact=funFact
return myObj
}


// B
// Make 10 new students (student1, student2, ... student10) using the factory
// function that you have created with the names of your classmates.
// Note: You can ask your peers for their fun facts during the break.


var student1 = makeStudent("Ahmed", "nechi", 21, "I love playing soccer.")
var student2 = makeStudent("Ines", "khmir", 19, "I enjoy painting in my free time.")
var student3 = makeStudent("Youssef", "salem", 22, "I'm a huge fan of Marvel movies.")
var student4 = makeStudent("Layla", "chebi", 20, "I like reading books about history.")
var student5 = makeStudent("Mohammed", "Mahmoud", 23, "I enjoy playing video games.")
var student6 = makeStudent("Rahma", "Ben said ", 20, "I'm learning how to code in Python.");
var student7 = makeStudent("Sara", "messadi", 40, "I love listening to music and singing.")
var student8 = makeStudent("Omar", "Hussein", 19, "I'm a big fan of anime.")
var student9 = makeStudent("Hala", "Ibrahim", 35, "I like hiking and being outdoors.")
var student10 = makeStudent("Abdul", "Aziz", 22, "I'm passionate about photography and videography.")
// C
// Create an array called "allStudents" that holds all the students that you created in step B

var allStudents=[student1,student2,student3,student4,student5,student6,student7,student8,student9,student10]

/*****************************  3  ***********************/
// A
// Create a function called studentsInfo that iterates through the "allStudents"
// array and console.log the first name of all the students with their fun facts
// ex:
// "Salah's fun fact: Talks when he sleeps"
// "Mohamed's fun fact: He is scared of cats" ...
function studentsInfo(){
  for (i=0;i<allStudents.length;i++){
    var student=allStudents[i]
    console.log(student.firstName+" 's fun fact :"+ student.funFact)
  }
}


// B
// create a function called calculateAverage that takes an array of objects (allStudents)
// and displays the average of all the ages of your peers
function calculateAverage(allStudents) {
  var  sum = 0;
  for (var i = 0; i < allStudents.length; i++) {
    sum += allStudents[i].age;
  }
  var  average = sum / allStudents.length

  return "The average age of your peers is" +average
}



/*****************************  4  ***********************/
// Back to our students at RBK. You like this cohort so much that you decided to become
// friends on facebook. 
// Create an object called myFacebookProfile. 
// 1) The object should have 3 properties:
// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)

// 2) The object should also have 4 methods:
// postMessage(myFacebookProfile, message) - adds a new message string to the array
// deleteMessage(myFacebookProfile, index) - removes the message corresponding to the index provided
// addFriend(myFacebookProfile) - increases the friend count by 1
// removeFriend(myFacebookProfile) - decreases the friend count by 1
var  myFacebookProfile = {
  name: "Wassim",
  numOfFriends: 0,
  messages: [],
  
  postMessage: function(message) {
    myFacebookProfile.messages.push(message);
  },
  
  deleteMessage: function(index) {
    myFacebookProfile.messages.splice(index, 1);
  },
  
  addFriend: function() {
    myFacebookProfile.numOfFriends++;
  },
  
  removeFriend: function() {
    if (myFacebookProfile.numOfFriends > 0) {
      myFacebookProfile.numOfFriends--;
    }
  }
};


/*****************************  4  ***********************/
// You and your new RBK friends started hanging out at RBK in the cafeteria.
// So, Oscar asked you to help him sell his new products he brought to RBK; Donuts.
// Here is an array of donut objects that Oscar wants to sell at RBK.

var donuts = [
  { type: "Jelly", cost: 1.5 },
  { type: "Chocolate", cost: 2.2 },
  { type: "Cider", cost: 1.7 },
  { type: "Boston Cream", cost: 5 },
  { type: "Strawberry", cost: 3 }
];
function display(){
  for (var i = 0; i < donuts.length; i++) {
    var donut = donuts[i]
    var costStr = donut.cost.toFixed(3)
    console.log(donut.type + " donuts cost " + costStr+ " TND each");
}
}

// Help Oscar create the menu that he is going to display by looping
// over the array and print out the following donut summaries using console.log.
// Expected output:
// "Jelly donuts cost 1.500 TND each"
// "Chocolate donuts cost 2.200 TND each"
// "Cider donuts cost 1.700 TND each"
// "Boston Cream donuts cost 5.000 TND each"
// HINT: you need to use a built-in method to change the number from 5 to 5.000



/*****************************  5  ***********************/
// Make it easier for Oscar to give the price of one specific donut among all the donuts that he has.
// Implement a function called "findDonut" that takes the "donuts" object and a target
// and that will return the price of the donut
// example: findDonut(donuts, "Cider") => 1.7
// Note: EXTRA if you handle lower and upper case
// example: findDonut(donuts, "ciDeR") => 1.7

function findDonut(donuts, target) {
  target = target.toLowerCase();
  
  for (var  donut in donuts) {
    if (donut.toLowerCase() === target) {
      return donuts[donut];
    }
  }
  
  return null
}



/*****************************  6  ***********************/
// When Oscar does his inventory to the administration, they ask him to give his report sorted by prices.
// Implement a function called sortDonuts that takes the donuts array and returns an array of donuts
// sorted according to the price.
// PS: try implementing your own sorting algorithm or the .sort built-in method
// PSS: well known sorting algorithms are bubble sort, selection sort and insertion sort. read about them



/*****************************  7  ***********************/
// Finally, oscar wants to know how many donuts he has in the donuts array.
// write a function called findDonutsLength that returns how many donuts he has.
// NOTE: do this with two methods:
// 1) using a for loop and a counter
// 2) using a built in method (you should know the method if you have done your self reading)



/*****************************  8  ***********************/
// Write a function countWords that, when given a string as an argument, 
// returns an object where keys are the words in the string, and values are 
// the number of occurrences of that word within the string:
// countWords('hello hello');     => {'hello': 2} 
// countWords('Hello hello');     => {'Hello': 1, 'hello': 1} 
// countWords('The quick brown'); => {'The': 1, 'quick': 1, 'brown': 1}

// HINT: You will want to make use of the string method split. 
// Try 'Hello hello'.split(' ') at a console to see how it works. 

function countWords(str){
    var  wordCount = {}
    var  words = str.split(' ')
    var i=0
   while(i < words.length){
    
       var word = words[i]
       wordCount[word] = (wordCount[word] || 0) + 1
       i++
    }
    
    return wordCount
  }
  




/*****************************  9  ***********************/
// Write a function countCharacters that, when given a string as an argument, 
// returns an object containing counts of the occurrences of each character in the string.
// countCharacters('hello');    // => {'h': 1, 'e': 1, 'l': 2, 'o': 1}
// HINT: You will want to use the string method split. Try 'hello'.split('') in the console to see how it works.
function countCharacters(str) {
  var  counts = {}

  var  chars = str.split('');

  for (var  i = 0; i < chars.length; i++) {
    var  char = chars[i]
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  return counts
}




/*****************************  10  ***********************/
// A
// Create an a function called makeUmbrella that returns an object
// with the following properties:
// owner, color, isOpen (set by default to false)


// B
// Implement the following two functions:
// 1) open: if the umbrella is open, return "The umbrella is already opened"
// if the umbrella is not open, display "[NAME_OF_THE_OWNER] just opened the [COLOR_OF_THE_UMBRELLA] umbrella" 
//  with the appropriate changes you need to make to the properties of the instance.
// 2) close: if the umbrella is not open, display "The umbrella is already closed"
// if the umbrella is open, display "[NAME_OF_THE_OWNER] just closed the [COLOR_OF_THE_UMBRELLA] umbrella" 
//  with the appropriate changes you need to make to the properties of the instance.
// NOTE: Both functions take the object umbrella as parameter
// Example: 
// var newUmbrella = makeUmbrella('Hbib', 'Black')
// open(newUmbrella) => 'Hbib just opened the Black umbrella'
// open(newUmbrella) => 'The umbrella is already opened'
// open(newUmbrella) => 'The umbrella is already opened'
// close(newUmbrella) => 'Hbib just closed the Black umbrella'
// close(newUmbrella) => 'The umbrella is already closed'


// C
// Create an instance of the umbrella and test your function


// D
// refactor your code so that both function become properties of the makeUmbrella
// and do the necessary changes.
// example:
// var newUmbrella = makeUmbrella('Rabeb', 'yellow')
// newUmbrella.open() => 'Rabeb just opened the yellow umbrella'
// Note that there are no arguments in the invocation of the function.


/*****************************  11  ***********************/

/*
  makeGetterSetter should return a function that is a getter setter.
  When the getter/setter is invoked with a single argument, it should set
  the value. When the getter/setter is invoked without any arguments,
  it should return the previously set value.
  var getterSetter = makeGetterSetter();
  getterSetter() // returns undefined
  getterSetter(5)
  getterSetter() // returns 5
  getterSetter('hi')
  getterSetter() // returns 'hi'
*/

var makeGetterSetter = function() {
    var  value;
    function getterSetter(newValue) {
      if (newValue !== undefined) {
        value = newValue
      }
      else {
        return value;
      }
    }
  
    return getterSetter
  };
  

/*****************************  12  ***********************/

/*
passwordProtect(func, password)
passwordProtect returns a function that, when called, only invokes func when the matching password is supplied as the first argument. 
When the matching password is supplied, any additional arguments should be passed to func and the return value of func should be returned from the created function. 
If the password does not match, func is not invoked and nothing is returned.
var myFunc = function(a, b) {
  console.log('my func ran');
  return a + b;
};
var protectedMyFunc = passwordProtect(myFunc, 'p@ssw0rd');
protectedMyFunc('password', 1, 2); // nothing logged, nothing returned
protectedMyFunc('p@ssw0rd', 1, 2); // logs 'my func ran', returns 3
protectedMyFunc('p@ssw0rd', 13, 5); // logs 'my func ran', returns 18
*/

var myFunc = function(a, b) {
  console.log('my func ran');
  return a + b;
};

var passwordProtect = function(callback, password) {
  // YOUR CODE HERE
};
/***************************** More Practice ***********************/
/***************************** 1 ***********************/

// Let's Imagine that you are talking with a robot and this robot will keep telling you Hello until you answer him 
// Invoke the function and solve it according to the concept of your robot

function robotMethod(){
    var obj={}
    var robot;
   
    
    obj.sayHi=function( strAnswer ){
      if(strAnswer !==' '){
        clearInterval(robot)
      }
        var counter=0
            robot=setInterval(function(){
                console.log('Hello Freind '+counter++)
            },3000)
      // YOUR CODE HERE  
      
    }
    
    return obj
}
// Example :
// var robot=robotMethod()
// robot.sayHi() ==>Hello Freind 1 
//                Hello Freind 2
//                Hello Freind 3
//                Hello Freind 4
// robot.sayHi('Hi')=> 'Thank you for answering me'

/***************************** 2***********************/
  // Let's update your robot method that if you answer him afer 10 times of saying Hi he will respond to you 'nope i don't want to be your freind you are too late 'else then that he will answer you 'yey let's Be freinds'


// Example 1 :
// var robot=robotMethod()
// robot.sayHi() ==> Hello Freind 1 
//                Hello Freind 2
//                Hello Freind 3
//                Hello Freind 5
//                Hello Freind 6
//                Hello Freind 7
//                Hello Freind 8
//                Hello Freind 9
//                Hello Freind 10
//                Hello Freind 11
//                Hello Freind 12
                     
// robot.sayHi('Hi')=> "nope i don't want to be your freind you are too late "
// Example 2 :
// var robot=robotMethod()
// robot.sayHi('Hi') ==> Hello Freind 1 
//                Hello Freind 2
//                Hello Freind 3
//                Hello Freind 4

// robot.sayHi('Hi') ==> "Yey let's Be freinds"

function robotMethod(){
  var obj={}
  var robot;
  
  obj.sayHi=function( strAnswer ){
    var counter=0
    if(strAnswer !==' '){
      clearInterval(robot)
    
    if (counter >= 10) {
      return "nope i don't want to be your friend you are too late"
    }
     else {
      return "yay let's be friends"
     }
    

    } else  {
      var counter=0
          robot=setInterval(function(){
              console.log('Hello Freind '+counter++)
          },3000)
        }
    
  
      }

  

  return obj
}




/*****************************3***********************/

// Great Job now let's start conversation with your robot 
//  Imagine that you have an object of conversarions and each time you start conv it will pick for you a random one and it will be shown in the console 


// Example:
// var conversations=[{Robot:'How are you?',You:"i'm fine thanks"},{Robot:'How old are you',You:"oops this is private sorry "},{Robot:'Where do you live?',You:"In Earth"},{Robot:'How old are you',You:"oops this is private sorry "},{Robot:'Do you have plans for today ',You:"I have to finish the Extra revision Before monday "}]

// var robot=robotMethod(conversations)
// robot.startConversation()=> 'Robot: How are you?'
//                             'You: i"m fine thanks'
// robot.startConversation()=> 'Robot: Where do you live?'
//                             'You: In Earth'


function robotMethod(conversations){
var myObj={}
var inedx=-1
myObj.conversation=function(){
   index = Math.floor(Math.random() * conversations.length);
console.log("Robot: " + conversations[index].Robot)
console.log("You: " + conversations[index].You);

},
myObj.showAll = function() {
  for (var i = 0; i < conversations.length; i++) {
    console.log(conversations[i]);
  }
};

return myObj
}



/*****************************4***********************/
// Perfect now what if you want to see all of your conversations with this robot
//  Create a methot that will show you all the coversations that you did randomly 


// Example:
// var robot=robotMethod(conversations)
// robot.showAll()=> {Robot:'How are you?',You:"i'm fine thanks"} 
//                   {Robot:'Where do you live?',You:"In Earth"}





/***************************** Advanced***********************/

/***************************** 1***********************/
//  Develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

// var  ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
// var statistics=stat(ages)
// statistics.count()  ==>  25
// statistics.sum()    ==>  744
// statistics.min()    ==>  24
// statistics.max()    ==>  38
// statistics.range()  ==>  14
// statistics.mean()   ==>  30
// statistics.median() ==>  29
// statistics.mode()   ==>  {'mode': 26, 'count': 5}
// statistics.Variance()  ==> 17.5
//  statistics.StandardDeviation()  ==>  4.2

// statistics.describe()  ==>
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// 
