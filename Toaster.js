function Toaster() {
    var instance = {};
    instance.isOn = false,
    instance.toastLevel = 0,
    instance.toast= undefined,
    instance.updateToastLevel=updateToastLevel,
    instance.turnOn=turnOn,
    instance.turnOff=turnOff,
    instance.toast=toast,
    instance.addToast=addToast,
    instance.eject=eject,
    instance.start =start,
    instance.stop=stop
    return instance
 }
    
    function updateToastLevel() {
      this.toastLevel += 1;
    }
    var turnOn = function() { // tebda te5dem kan fema bread 
      this.isOn = true;
    };
  
    var turnOff = function() { // mfemch bread ta9if 
      this.isOn = false;
    };
  
    var toast = function() {
      if (this.isOn===false ){ // the toast turn of and ison is false 

        console.log("Toaster is not turned on!");
        return;
      }
      updateToastLevel();
      console.log("Toasting bread at level " + this.toastLevel);
    };

    var addToast = function(newToast){
        newToast=this.toast;
    };

    var eject = function(){
        if (this.toast===undefined){
            return " the toaster is empty"
        }
        else {
           var toastedToast= this.toast+ " (toasted) "
           this.toast=undefined
           return toastedToast;
        }
    };

    var start = function(){
          if (this.toast=undefined){
            return "Add toast befor starting! "
          } else {
            setTimeout(function(){
                this.toast+=("toasted")
                console.log("Ding!")
            },2000);
          }
    };
    var stop=function(){
        if (setTimeout!==undefined){
        clearTimeout(setTimeout) // kima stop watch 
        setTimeout=undefined
        }
      }
  var myToaster = Toaster();

  myToaster.turnOn(); // 
  myToaster.toast(); // the toast bread at level 1 
  myToaster.toast(); // toast bread at level 2
  myToaster.turnOff(); // turn off the toaster
  myToaster.toast(); 
       
