// Data Modeling with Closures


// <h3>Building a Todo List</h3>
var makeCounter = function() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
};

var generateID = makeCounter();



var makeToDo = function(todo) {
  return function() {
    return {
      todo: todo,
      complete: false,
      id: generateID()
    };
  };
};

var todo1 = makeToDo("Complete coding challenge", false)();
var todo2 = makeToDo("Buy milk", false)();
var todo3 = makeToDo("Call mom", false)();

var todos = [todo1, todo2, todo3];

var displayTodo = function(todo) {
  return "todo" + todo.id + ":" + todo.todo + ".";
};

var makeTodoList = function(initialTodos) {
  var todos = initialTodos;
  
  return { 
    display: function() {
      var str = " ";
      for (var i = 0; i < todos.length; i++) {
        str = str + (i + 1) + "-" + displayTodo(todos[i]) + ".\n";
      }
      return str;
    },

    add: function(todo) {
      todos.push(todo());
      return todos;
    },
    
    complete : function(id){

      var todo=todos.find(todo=>todo.id===id)
      if (todo){
        todo.complete=true
        console.log(todo +" is completed")
      }
      else console.log("could not find  "+todo)
    },

    toggleComplete: function(id) {

        for (var i = 0; i < todos.length; i++) {
          if (todos[i].id === id) { // if id is comform of todos id  
            todos[i].complete = !todos[i].complete;
            return todos[i]
          }
          else {
            return todos[i]+"is  completed "
          }
        }
      },

    remove : function (todos){
        for ( var i=0;i<todos.length;i++){
          if(todos[i].complete===true){
            todos.splice(i,1)
            return "removed"+ todos[i]

          }
        }
        return "Not found"
      },

    archive: function (){
         var arr=[]
         arr.push(this.remove.todos[i])
         return arr
    },

    displayArchived: function(){
      return  "the archived todos is "+ archive()

    },

    unarchive:function (id){
      var todo=arr.find(todo=>todo.id===id)
      if (todo){
        todos.push(arr[i])
      }

    },
    clearArchived: function (){
      deleteProperty(archive())
    },

    move:function(from,to){
      this.splice(to, 0, this.splice(from, 1)[0]);
    },

    }

    }
  
      
      

  


  