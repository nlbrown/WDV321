/*
This test takes in an email address for valid format

   input         explcted result
sample@dmacc.edu    true
sampledmacc.edu      false
sample@dmaccedu      false
sample@dmacc.ed       false

*/
let validateEmail = {};

validateEmail.email = function (inputemail) {
  inputemail = inputemail + "";
    
let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;

return regex.test(inputemail);

}

module.exports = validateEmail;