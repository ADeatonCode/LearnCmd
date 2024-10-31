let a = 3;
let b = 4;
let name = 'Alan';
let lastName = 'Deaton';
let trafficLight = 'red';

function addition(a, b) {
  let c = a + b;
  return c;
}

function subtraction(a, b) {
  let c = b - a;
  return c;
}

function multiplication(a, b) {
  let c = a * b;
  return c;
}

function division(a, b) {
  let c = a / b;
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

function fullName(name, lastName) {
  name = name + " " + lastName;
  return name;
}

function lightChange(trafficLight) {
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
      let result = addition(a, b);
      assert.strictEqual(result, a + b);
  });

  // Test subtraction function
  it('should correctly subtract b from a', () => {
      let result = subtraction(a, b);
      assert.strictEqual(result, b - a);
  });

  // Test multiplication function
  it('should correctly multiply a and b', () => {
      let result = multiplication(a, b);
      assert.strictEqual(result, a * b);
  });

  // Test division function
  it('should correctly divide a by b', () => {
      let result = division(a, b);
      assert.strictEqual(result, a / b);
  });

  // Test incrementA function
  it('should increment a by 1', () => {
      let val = a;
      let result = incrementA(val);
      assert.strictEqual(result, val + 1);
  });

  // Test decrementB function
  it('should decrement b by 1', () => {
      let val = b;
      let result = decrementB(val);
      assert.strictEqual(result, val - 1);
  });

  // Test fullName function
  it('should set name as first name and last name combined', () => {
      let firstName = name;
      let result = fullName(firstName, lastName);
      assert.strictEqual(result, firstName + ' ' + lastName);
  });

  // Test lightChange function
  it('should set trafficLight to green', () => {
      let result = lightChange(trafficLight);
      assert.strictEqual(result, "green");
  });
});