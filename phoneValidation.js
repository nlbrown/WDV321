
var validatePhoneNumber = require("../app/validatePhoneNumber.js");

 var assert = require('chai').assert;

describe('Phone Number test' , function() {
 it('239-234-1111 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("239-234-1111");
	
	assert.equal(returnValue, true);
	
	});
	
it(' 123-456-7890 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("123-456-7890");
	
	assert.equal(returnValue, false);
	
	});
	
it(' aaa-aaa-aaaa should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("aaa-aaa-aaaa");
	
	assert.equal(returnValue, false);
	
	});
	
it(' 1 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("1");
	
	assert.equal(returnValue, false);
	
	});
	
it(' 000-000-0000 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("000-000-0000");
	
	assert.equal(returnValue, false);
	
	});
	
it(' 999/234/2424  should Fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("999/234/2424");
	
	assert.equal(returnValue, false);
	
	});
	
it(' 123-3a5-6789 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("123-3a5-6789");
	
	assert.equal(returnValue, false);
	
	});
	
it(' $%^-(*&-!@*4 should Fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("$%^-(*&-!@*4");
	
	assert.equal(returnValue, false);
	
	});
	
it(' 123-3 4-6789 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("123-3 4-6789");
	
	assert.equal(returnValue, false);
	
	});
	
it(' 515-244-1111 should Pass', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("515-244-1111");
	
	assert.equal(returnValue, true);
	
	});
	
it(' 702-123-4765 should Pass', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("702-123-4765");
	
	assert.equal(returnValue, true);
	
	});
	
it(' 363-433-3789 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("363-433-3789");
	
	assert.equal(returnValue, false);
	
	});
	
it(' 515-433-378 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("515-433-378");
	
	assert.equal(returnValue, false);
	
	});
	
it(' 63-433-3789 should fail', function() {
 
	let returnValue = validatePhoneNumber.phonenumber("63-433-3789");
	
	assert.equal(returnValue, false);
	
	});
});