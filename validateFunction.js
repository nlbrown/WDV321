function phonenumber(inputtxt){
    
var arrBad = [211,221,222,223,230,232,233,235,237,238,241,243,244,245,247,255,
257,258,259,261,263,265,266,271,273,275,277,278,280,282,285,286, 
287,288,290, 291, 292, 293, 294, 295, 296, 297, 298, 299,300,322,
324,326,328,329,332,333,335,338,341,342,344,348, 349, 350,353,
354, 355, 356, 357, 358, 359,362,363,366, 367, 368,370, 371, 
372, 373, 374, 375, 376, 377, 378, 379, 
990, 991, 992, 993, 994, 995, 996, 997, 998, 999];

 arrBad = arrBad.toString();
    
  //  checking if area code is in bad array
if (arrBad.indexOf(inputtxt.substring(0, 3)) > -1) {
    console.log("test 1 "+inputtxt.substring(0, 3));
    return false;
}
// checking if area code < 200 
if(parseInt(inputtxt.substring(0, 3)) < 201){
    return false;
}
    
var phonenumregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(phonenumregex.test(inputtxt)) {
      return true; 
    }else{
      return false;
    }
}