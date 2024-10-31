// 1. learn If statements
// https://www.youtube.com/watch?v=PgUXiprlg1k&t=421s&ab_channel=BroCode

// 2. learn about for loop
//  https://www.youtube.com/watch?v=ZOQYIWLngSU&ab_channel=BroCode

//3. learn advanced  way to work with array
// https://www.youtube.com/watch?v=cDCzz8vJf3Y&ab_channel=EnvatoTuts%2B

// write you code here

const is_array = (input) => {
   if (toString.call(input) === '[object Array]')
     return true;
   else
    return false;
}


const first = (arr, n = 0) => {
    if(!is_array(arr)) return 'Error: Input is not an array';
    if(n < 0) return 'Error: n should be a positive integer';
    if(n > arr.length) return 'Error: n is greater than the array length';
    return arr[n];
}

const last =(arr, n = arr.length - 1 ) => {
    if(!is_array(arr)) return 'Error: Input is not an array';
    if(n < 0) return 'Error: n should be a positive integer';
    if(n > arr.length) return 'Error: n is greater than the array length';
    return arr[n];
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(" ");

console.log('First element of the array');
console.log('----------------------------------------------------------------');

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2,3]));
console.log(first([7, 9, 0, -2,6]));
console.log(first([7, 9, 0, -2,-3]));
console.log(" ");

console.log('Last element of the array');
console.log('----------------------------------------------------------------');

console.log(last([7, 9, 0, -2]));
console.log(last([[],3]));
console.log(last([7, 9, 0, -2,3]));
console.log(last([7, 9, 0, -2,6]));
console.log(last([7, 9, 0, -2,-3]));

//
//Write a JavaScript function to check whether an `input` is an array or not.
//Test Data :
//console.log(is_array('w3resource'));
//console.log(is_array([1, 2, 4, 0]));
//false
//true
//Neaj Mahmud
//6:59 PM
//------------------------------------------------
//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
//Test Data :
//console.log(first([7, 9, 0, -2]));
//console.log(first([],3));
//console.log(first([7, 9, 0, -2],3));
//console.log(first([7, 9, 0, -2],6));
//console.log(first([7, 9, 0, -2],-3));
//Neaj Mahmud
//7:06 PM
//--------------------------
//console.log(first([7, 9, 0, -2]));
//console.log(first([[],3]));
//console.log(first([7, 9, 0, -2],3));
//console.log(first([7, 9, 0, -2],6));
//console.log(first([7, 9, 0, -2],-3));
//Neaj Mahmud
//7:13 PM
//Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
//Test Data :
//console.log(last([7, 9, 0, 5]));
//console.log(last([7, 9, 0, -2]));
//console.log(last([7, 9, 0, 10]));
//Expected Output :
//5
//-2
//10
// Wirte a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// expected output : "Red,Green,White,Black";

const myArray = [1,35,50,40,100]

let sum=0;
for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}

console.log('Last element of the array');
console.log('----------------------------------------------------------------');

console.log("Sum of all elements in the array: " + sum);

const arr = [[1,2,3],[4,5,6],[7,8,9,10]]
for (let i of arr) {
  for (let j of i) {
    console.log(j) //Should log numbers from 1 to 10
  }
}