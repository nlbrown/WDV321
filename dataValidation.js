var validateEmail = require("../app/validateEmail.js");
var validateZipCode = require("../app/zipCodeValidation.js");
var validateSpecial = require("../app/validateSpecialChars.js");

 var assert = require('chai').assert;

describe('email test' , function() {
 it('sampledmacc.edu should fail', function() {
 
	let returnValue = validateEmail.email("sampledmacc.edu");
	
	assert.equal(returnValue, false);
	
	});
    
    it('sample@dmacc.edu should pass', function() {
 
	let returnValue = validateEmail.email("sample@dmacc.edu");
	
	assert.equal(returnValue, true);
	
	});
    
    it('sample@dmaccedu should fail', function() {
 
	let returnValue = validateEmail.email("sample@dmaccedu");
	
	assert.equal(returnValue, false);
	
	});
    
    it('sample@dmacc.ed should fail', function() {
 
	let returnValue = validateEmail.email("sample@dmacc.ed");
	
	assert.equal(returnValue, false);
	
	});
    
    
 it('5-5555 zipcode should fail', function() {
 
	let returnValue2 = validateZipCode.zipCode("5-5555");
	
	assert.equal(returnValue2, false);
	
	}); 
    
    it('Aa-aaaaa zipcode should fail', function() {
 
	let returnValue2 = validateZipCode.zipCode("Aa-aaaaa");
	
	assert.equal(returnValue2, false);
	
	});
    
    it('0000 zipcode should fail', function() {
 
	let returnValue2 = validateZipCode.zipCode("0000");
	
	assert.equal(returnValue2, false);
	
	});
    
    it('12345 zipcode should Pass', function() {
 
	let returnValue2 = validateZipCode.zipCode("12345");
	
	assert.equal(returnValue2, true);
	
	});
    
    it('12345-6789 zipcode should Pass', function() {
 
	let returnValue2 = validateZipCode.zipCode("12345-6789");
	
	assert.equal(returnValue2, true);
	
	});
    
    it('00000-0000 zipcode should fail', function() {
 
	let returnValue2 = validateZipCode.zipCode("00000-0000");
	
	assert.equal(returnValue2, false);
	
	});
    
 it('23<36663 special Chars test should fail', function() {
 
	let returnValue3 = validateSpecial.thestring("23<36663");
	
	assert.equal(returnValue3, false);
	
	}); 
    
 it('sdsdf>45 special Chars test should fail', function() {
 
	let returnValue3 = validateSpecial.thestring("sdsdf>45");
	
	assert.equal(returnValue3, false);
	
	});

  it('/834jrw special Chars test should fail', function() {
 
	let returnValue3 = validateSpecial.thestring("/834jrw");
	
	assert.equal(returnValue3, false);
	
	});

    it('weh3ur$ special Chars test should Pass', function() {
 
	let returnValue3 = validateSpecial.thestring("weh3ur$");
	
	assert.equal(returnValue3, true);
	
	});
    
});