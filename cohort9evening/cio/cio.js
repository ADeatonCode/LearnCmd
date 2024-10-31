// The following functions perform as input and output for the console and make a convenient way to pass data from the keyboard to the program.  It requires that the node_modules folder contain the folder readline-sync with the necessary information.  If need be, you can install readline-sync from the command line by typing: npm install readline-sync

const readlineSync = require('readline-sync');

// Function to mimic C++ cin
function cin(prompt) {
    // Use readline-sync to read input while showing it
    const input = readlineSync.question(prompt, {
        hideEchoBack: false, // Shows the input while
        // defaultPrompt: " ", // Uncomment for default no show prompt
    });
    return input;
}

function cPwdIn(prompt) {
    // Use readline-sync to read input without showing it
    const input = readlineSync.question(prompt, {
        hideEchoBack: true, // Hides the input (password-style)
        // defaultPrompt: " ", // Uncomment for default no show prompt
    });
    return input;
}

// Demonstration using the cin function
const userInput = cin("Please enter a value: ");
console.log(userInput);
// Demonstration using the cPwdIn function
const userPwd=cPwdIn(`Enter password:`);
console.log("You entered a value (input was hidden).");
console.log(userPwd);
