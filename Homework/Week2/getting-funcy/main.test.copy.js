/**********************************
 * YOUR CODE GOES HERE THIS TIME! *
 **********************************/
let a=3;
let b = 4;
let c =0;
let name = 'Alan';
let lastName = 'Deaton';
let trafficLight = 'red';

console.log("a, "+a)
console.log("b, "+b)
console.log("c, "+c)
console.log("name, "+name)
console.log("lastName, "+lastName)
console.log("trafficLight, "+trafficLight)
console.log("----------------------------");

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

addition(a,b);
console.log(a+"+"+b+"="+c);
subtraction(a,b);
console.log(a+"-"+b+"="+c);
multiplication(a,b);
console.log(a+"*"+b+"="+c);
division(a,b);
console.log(a+"/"+b+"="+c);
incrementA(a);
console.log(a);
decrementB(b);
console.log(b);
fullName(name,lastName);
console.log(name);
console.log(lastName);
lightChange(trafficLight);
console.log(trafficLight);
console.log("----------------------------");