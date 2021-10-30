// 1. A simple function printing Simple text to the console

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    // This line print parameter to the console.
    console.log(parameterVariable);
}
console.log(greeting("This is my first program in javaScript"));




// 2. A simple function printing using operations by converting string to int and float with the help of parse. 
function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4; 
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;  
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'This is ';
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number type) on a new line.
    console.log(firstInteger + parseInt(secondInteger));
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number type) on a new line.
    console.log(firstDecimal + parseFloat(secondDecimal));
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}
console.log(performOperation("12", "4.32", "my second program"));




