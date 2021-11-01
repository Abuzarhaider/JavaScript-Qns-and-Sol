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




// 3. Arithmatic operation (Sum operation)
/*
   Calculate the area of a rectangle.

   length: The length of the rectangle.
   width: The width of the rectangle.
   
	Return a number denoting the rectangle's area.
*/
    function getArea(length, width) {
        let area;
        area = length * width;
        // Write your code here
        return area;
    }
    console.log(getArea(10, 5));

    function getPerimeter(length, width) {
        let perimeter;
        perimeter = 2 * (length + width);
        return perimeter;
    }
    console.log(getPerimeter(10, 5));




// 4. FIND the factorial of a number taken from user
    var num = window.prompt("Enter number");
    var x = 1;
    for (var i=num ; i>=1 ; i--){
        x = x*i ;
    }




// 5. AREA and PERIMETER of circle
    let r = window.prompt("Enter value of r");
    const PI = Math.PI;
    console.log(PI * r * r);
    console.log(PI * r * 2);

// OR

    function main() {
        // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
        let r = +(readLine());
        const PI = Math.PI;

        // Print the area of the circle:
        console.log(PI * r * r);

        // Print the perimeter of the circle:
        console.log(PI * r * 2);
    }




// 6. Grades according to the number scored(using if statement)
    function getGrade(score) {
        let grade;
        // Write your code here
        if(score>25){
            grade = "A";
        } else if(score>20 && score<=25){
            grade = "B";
        } else if(score>15 && score<=20){
            grade = "C";
        } else if(score>10 && score<=15){
            grade = "D";
        } else if(score>5 && score<=10){
            grade = "E";
        } else if(score>=0 && score<=5){
            grade = "F";
        }
        return grade;
    }