// This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two rules:

// First character of next word must match last character of previous word.
// The word must not have already been said.
// Below is an example of a Shiritori game:

// ["word", "dowry", "yodel", "leader", "righteous", "serpent"][ // valid!
//   ("motive", "beach")
// ][("hive", "eh", "hive")]; // invalid! - beach should start with "e" // invalid! - "hive" has already been said
// Write a Shiritori class that has two instance properties:

// words: an array of words already said.
// game_over: a boolean that is true if the game is over.
// and two instance methods:

// play: a method that takes in a word as an argument and checks if it is valid (the word should follow rules #1 and #2 above).

// If it is valid, it adds the word to the words array, and returns the words array.
// If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to true.
// restart: a method that sets the words array to an empty one [] and sets the game_over boolean to false. It should return "game restarted".

// Examples
// var my_shiritori = Shiritori();

// my_shiritori.play("apple") ➞ ["apple"]
// my_shiritori.play("ear") ➞ ["apple", "ear"]
// my_shiritori.play("rhino") ➞ ["apple", "ear", "rhino"]
// my_shiritori.play("corn") ➞ "game over"

// Corn does not start with an "o".

// my_shiritori.words ➞  ["apple", "ear", "rhino"]

// Words should be accessible.

// my_shiritori.restart() ➞ "game restarted"
// my_shiritori.words ➞ []

// Words array should be set back to empty.

// my_shiritori.play("hostess") ➞ ["hostess"]
// my_shiritori.play("stash") ➞ ["hostess", "stash"]
// my_shiritori.play("hostess") ➞ "game over"

// Words cannot have already been said.
console.log("hi");

function Shiritori() {
    var myObj={}
      this.words = [];
      this.game_over = false;
      myObj.play=play,
      myObj.restart=restart
      return myObj
    }
  
    var play=function (word) {
      if (this.game_over) {
        return "game over"
      }
      if (this.words.includes(word) || (this.words.length > 0 && this.words[this.words.length - 1].slice(-1) !== word[0])) { 
        this.game_over = true
        return "game over";
      }
      this.words.push(word)
      return this.words
    }
  
    var restart=function () {
      this.words = [];
      this.game_over = false;
      return "game restarted"
    }
  
