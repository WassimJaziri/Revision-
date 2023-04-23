 // While&For loops, Recursion || Material
 // -1-

 function iterateAndLogWithFor(n){
    for ( var i=0; i<n; i++){
        if ( i%2===0){
           console.log(i+" is even");
        }
        else { 
            console.log (i+" is odd");
        }
        }
        }

 function iterateAndLogWithWhile(n){
    var i=0;
     while(i<n){
        if ( i%2===0){
         console.log(i+" is even");
          }
            else { 
         console.log (i+" is odd");
                }
                i++
                }
                }

// -2-

function iterateAndLogWithFor(n){
    for ( var i=n; i>=0; i--){
        if ( i%2===0){
           console.log(i+" is even");
        }
        else { 
            console.log (i+" is odd");
        }
        }
        }

 function iterateAndLogWithWhile(n){
    var i=n;
     while(i>=0){
        if ( i%2===0){
         console.log(i+" is even");
          }
            else { 
                    console.log (i+" is odd");
                }
                i--
                }
                }


 function reverseIterateAndLogRecursively(n){
    if (n%2===0){
       console.log( n+" is even" );
         }
     else {
             console.log( n+" is odd" ); 
          }
      if(n===0){
    return "Finish"
        }
      return reverseIterateAndLogRecursively(n-1)
    }

    // -3-
    function weirdDivisionWithFor(n){
        for (var i=1;i<n;i++){
            if ((i%5===0) &&(i%3===0)){
                console.log("JuliaJames")
            }
            else if (i%5===0){
                console.log("James")
            }
            else if (i%3===0){
                console.log("julia")
            }
            else {
                console.log(i)
            }
        }
    }
     function weirdDivisionWithwhile(n){
        var i=0;
        while (i<n){
            if((i%3===0)&&(i%5===0)){
                console.log("juliaJames")
            }
            else if(i%5===0){
                console.log("James")
            }
            else if(i%3===0){
                console.log("Julia")  
            }
            else {
                console.log(i)  
            }
            i++
            }
            }
 function inverseWeirdDivisionRecursively(n){
    
         if((n%3===0)&&(n%5!==0)){
                    console.log("julia")
                }
       else if((n%5===0)&&(n%3!==0)){
                    console.log("James")
                }
     else if((n%3===0)&&(n%5===0)){
                    console.log("JuliaJames")  
                }
                else {
      console.log(n)  
                }
        
    if(n===1){
    return
    }
    return inverseWeirdDivisionRecursively(n-1)
    }  

function laughWithFor(number){
    var str=' '
    for (var i = 0; i < number; i++) {
       str  += "ha";
       
      }
      return str 
}
function laughWithwhile(number){
    var str=' '
    var i=0
    while(i<number){
        str  += "ha"
        i++
    }
    return str 
}
function laughRecursively(number) {
    if (number ===0){
        return " "
    }
    return "ha "+ laughRecursively(number-1)
}

function sumWithFor(number) {
    var sum = 0
    for (var  i = number; i > 0; i--) {
      sum += i
    }
    return sum
  }

  function sumWithWhile(number) {
    var  sum = 0
    var i=number
    while (number > 0) {
      sum += number
      i--
    }
    return sum
  }
  function factorialRecursively(number) {
    if (number === 0 || number === 1) {
        return 1
      } else {
        return number * factorial(number - 1);
      }
    }
  
function rangeFor(min, max){
    var result =[]
    for (var i=min;i<max;i++){
        result.push(i)
    }
    return result 
}
function rangewhile(min, max){
    var result=[]
    while (max>min+1){ // decrement from max to min 
        max--
        result.push(max)
    }
    return result 
}
function reverseWithWhile(str){
    var string=' '
    for ( var i=str.length-1;i>0;i--){
        string+=str[i]
    }
    return string 
}

function reverseWithFor(str){
    var n=str.length-1
    var string=' '
    while(n>=0){
        string+=str[i]
        n--
    }
    return string 
}
function reverseRecursively(str){
    if (str===''){
    return ' '
    }
      return reverse(str.slice(1, str.length)) + str[0];
    }



function addDigits(num) {
    var  sum = 0;
    while (num>0) {
    num = Math.floor(num / 10); 
      sum += num % 10;
     
    }
    return sum;
  }


  function fibRecursive(number) {
    var result
    if (n===0){
        return 0
    }
    if(n===1){
        return 1
    }
    return result = fibRecursive(n-2) + fibRecursive(n-1)
}


function firstDigit(str) {
    var  i = 0
  while (i < str.length) {
    if (str[i] >= '0' && str[i] <= '9') {
      return number(str[i]);
    }
    i++
  }
  return null
}


function remove(array, element){
var result = [];
for (var i = 0; i < array.length; i++) {
  if (array[i] !== element) {
    result.push(array[i])
  }
}
return result
}

function average(arrOfNumbers) {
    var  result = 0
    for (var i = 0; i < arrOfNumbers.length; i++) {
      res+= numbers[i]
    }
    return result
  }


  function findMax(array){
    var max_num=array[0]
      for (var i=0;i<array.length;i++){
         if ( array[i]>max_num){
            max_num=array[i]
         }
         }
      return max_num
  }

  function evenDigitsOnly(input){
    for (var i=0;i<input.length;i++){
        if (input[i]% 2 !==0){
            return false 
        }
    }
    return true 
  }

  function palindrome(str){

    for ( var i=0;i<Math.floor(str.length/2);i++){
        if (str[i]!==str[str.length-i-1]){
            return false 
        }
    }
    return true 
  }

  function firstDuplicate(array) {
    for ( var i=0;i<array.length;i++){
        for ( var j=i+1;j<array.length;j++){
            if (array[i]===array[j]){
                return array[i]
            }
        }
    }
    return "No duplicates"
  }
  
  function findCombinations() {
    
    for ( var row=0;row<26;row++){
        for (var seat =0;seat<100;seat++){
            console.log("Row"+row+" , Seat "+seat)
        }

       }

       }



