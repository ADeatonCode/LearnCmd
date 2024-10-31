// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223



const reverses =(x) =>{
    let reversed = parseInt(x.toString().split('').reverse().join(''));
    return reversed;
}

let x = 32243;
console.log(x);// sets x to 32243

console.log(reverses(x)); // Outputs: 34223

console.log("end");


