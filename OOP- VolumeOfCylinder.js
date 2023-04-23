function VolumeOfCylinder(){
    var volume={}

    volume.getVolume=getVolume
    return volume 
}

var getVolume=function(radius,height){
  var  v=Math.PI*Math.pow(radius,2)*height+" m3"
    return v.toFixed(4) // to round calculated volume to four decimals places .
}