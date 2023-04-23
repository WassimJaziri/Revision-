function  Stopwatch() {

    var watch={}
        watch.stop1=null,
        watch.time=0,
        watch.Stopwatch,
        watch.start=start,
        watch.stop=stop,
        watch.reset=reset
        return watch 
    }
   var start= function () {
    this.stop1= setInterval(()=>{ // This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling " mawhouda fi js "
        this.time=this.time+1;
        console.log('Elapsed time:'+this.time+'s.'+(this.Stopwatch))
    },1000);
   } 

    var stop=function (){
        clearInterval(this.stop1);// stop1: badalet name of variable to stop watch stop function <> stop1 variable
   }
   
   var reset=function (){
    clearInterval(this.stop1); // 
    this.time=0
   }



var  myStopwatch = new Stopwatch();

myStopwatch.start(); 
myStopwatch.stop(); 
myStopwatch.reset(); 

/*
 Note that the start, stop, and reset methods are now shared methods of the Stopwatch class,
 which means that all instances of the class have access to these methods.
*/