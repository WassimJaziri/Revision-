function VirtualCat(name){
    var cat={}
    cat.name=name,
    cat.tiredness=0,
    cat.hunger=0,
    cat.lonlines=0,
    cat.happiness=0,
    cat.feed=feed,
    cat.sleep=sleep,
    cat.pet=pet,
    cat.getStatus=getStatus
    
   
    return cat
}

  
   var  sleep= function(h) {
      this.tiredness -= h;
      this.happiness += h;
    }
  
   var  feed=function (food) {
      this.hunger -= food;
      this.happiness += food;
    }
  
    var pet=function() {
      const wantsToBePetted = Math.random() >= 0.5;
      if (wantsToBePetted) {
        this.loneliness -= 1;
        this.happiness += 1;
        console.log(this.name +"was petted." +this.name + "is now "+this.getStatus());
      } else {
        console.log(this.name +"doesn't want to be petted right now.");
      }
    }
  
    var getStatus =function() {
      var  status = [];
      if (this.tiredness > 5) {
        status.push('tired');
      }
      if (this.hunger > 5) {
        status.push('hungry');
      }
      if (this.loneliness > 5) {
        status.push('lonely');
      }
      if (this.happiness > 5) {
        status.push('happy');
      }
      return status.join(', ');
    }
