/**********************************
 * YOUR CODE GOES HERE THIS TIME! *
 **********************************/
let a = 3;
let b = 4;
let c = 0;
let name = 'Alan';
let lastName = 'Deaton';
let trafficLight = 'red';



function addition(a,b) {
  c = a + b;
  return c;
}

function subtraction(a,b)  {
  c = b - a;
  return c;
} 

function multiplication(a,b) {
  c = a * b;
  return c;
}

function division(a,b) {
  c = a / b;
  return c;
} 

function incrementA(a) {
  a++;
  return a;
}

function decrementB(b) {
  b--;
  return b;
}

function  fullName(name, lastName) {  
  name = name + " " + lastName;
  return name;
}

function lightChange(trafficLight)  {
  trafficLight = 'green';
  return trafficLight;
}

/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof a === 'undefined') {
  a = undefined;
}

if (typeof b === 'undefined') {
  b = undefined;
}

if (typeof c === 'undefined') {
  c = undefined;
}

if (typeof name === 'undefined') {
  name = undefined;
}

if (typeof lastName === 'undefined') {
  lastName = undefined;
}

if (typeof trafficLight === 'undefined') {
  trafficLight = undefined;
}

if (typeof addition === 'undefined') {
  addition = undefined;
}

if (typeof subtraction === 'undefined') {
  subtraction = undefined;
}

if (typeof multiplication === 'undefined') {
  multiplication = undefined;
}

if (typeof division === 'undefined') {
  division = undefined;
}

if (typeof incrementA === 'undefined') {
  incrementA = undefined;
}

if (typeof decrementB === 'undefined') {
  decrementB = undefined;
}

if (typeof fullName === 'undefined') {
  fullName = undefined;
}

if (typeof lightChange === 'undefined') {
  lightChange = undefined;
}

const assert = require('assert');

// Mocha tests
describe('Getting Funcy Tests', () => {
  // Test addition function
  it('should correctly add a and b', () => {
      addition();
      assert.strictEqual(c, a + b);
  });

  // Test subtraction function
  it('should correctly subtract b from a', () => {
      subtraction();
      assert.strictEqual(c, a - b);
  });

  // Test multiplication function
  it('should correctly multiply a and b', () => {
      multiplication();
      assert.strictEqual(c, a * b);
  });

  // Test division function
  it('should correctly divide a by b', () => {
      division();
      assert.strictEqual(c, a / b);
  });

  // Test incrementA function
  it('should increment a by 1', () => {
      let val = a
      incrementA();
      assert.strictEqual(a, val + 1);
  });

  // Test decrementB function
  it('should decrement b by 1', () => {
      let val = b
      decrementB();
      assert.strictEqual(b, val - 1);
  });

  // Test fullName function
  it('should set name as first name and last name combined', () => {
      let firstName = name
      fullName();
      
      assert.strictEqual(name, firstName + ' ' + lastName);
  });

  // Test lightChange function
  it('should set trafficLight to green', () => {
      lightChange();
      assert.strictEqual(trafficLight, "green");
  });
});