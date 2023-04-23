function Cercle(){
    var cer={}
    cer.area=area,
    cer.perimeter=perimeter
    return cer
}

var area=function(radius){
var s=Math.PI*Math.pow(radius,2)
return s.toFixed(4)+" m²"
}

var perimeter=function(radius){
    var P=(2*Math.Pi*radius)+" m"
    return P.toFixed(4)
}