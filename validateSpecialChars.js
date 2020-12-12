/*

A form input field will accept a string...

Validate the stirng by removing special characters < > /.

What are the rules?
String contains no characters of < > /. If ther are found replace
with -

Test Plan 

Input 				Expected Output
23<36663               false  23-36663
sdsdf>45               false   sdsdf-45
/834jrw                false -834jrw
e<45/drt               false e-45-drt
<><>/.></              false  -----.---
weh3ur$                true   weh3ur$


*/

let validateSpecial = {};

validateSpecial.thestring = function (instr)	{
   
    instr = instr + "";
    if(instr.includes("<") || instr.includes(">") || instr.includes("/") ){
        instr = instr.replace(/</g, "-");
        instr = instr.replace(/>/g, "-");
        instr = instr.replace(/\//g, "-");
  //      console.log("false "+instr);
        return false;
    }
  //  console.log("true "+instr);
    return true;
}


module.exports = validateSpecial;






















