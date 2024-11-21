//Task1
//Write a program that takes the user’s score and prints the corresponding grade based on the following rules:
//90-100 = “A”
//80-89 = “B”
//70-79 = “C”
//60-69 = “D”
//0-59 = “F”
//Goal
//Use multiple if-else if statements.


let score = +prompt("Enter your score: ");
let result;
if (score >= 90 && score <= 100) {
    result ="Your grade is: A";
} else if (score >= 80 && score <= 89) {
    result = "Your grade is: B";
} else if (score >= 70 && score <= 79) {
    result = "Your grade is: C";
} else if (score >= 60 && score <= 69) {
    result = "Your grade is: D";
} else if (score >= 0 && score <= 59) {
    result ="Your grade is: F";
} else {
    result = "Invalid score. Please enter a score between 0 and 100.";
}
console.log(result);


//Task2
// Write a program that takes a number as input and checks if it is even or odd:
//If the number is even, print “The number is even.”
//If the number is odd, print “The number is odd.”
//Use and learn modulo operator %


let number = +prompt("Enter a number: "); 
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}


//Task3
//Month Check
//Write a program that takes the number of a month (1-12) and prints which season it belongs to:
//12, 1, 2 -> “Winter”
//3, 4, 5 -> “Spring”
//6, 7, 8 -> “Summer”
//9, 10, 11 -> “Autumn”


let month = +prompt("Enter the number of the month (1-12): "); 
let output;
if (month === 12 || month === 1 || month === 2) {
    output = "Winter";
} else if (month >= 3 && month <= 5) {
    output = "Spring";
} else if (month >= 6 && month <= 8) {
    output = "Summer";
} else if (month >= 9 && month <= 11) {
    output = "Autumn";
} else {
    output = "Invalid month number. Please enter a number between 1 and 12.";
}
console.log(output);


//Task4
//Day Translation
//Create a program that uses a switch-case to translate a day of the week from English to Armenian. The user should input the name of the day in English,
//and the program should return the corresponding Armenian name.
//Input: “Monday”
//Output: “Երկուշաբթի”


let dayInEnglish = prompt("Enter a day of the week in English: ");
dayInEnglish = dayInEnglish.toLowerCase(); 
let output; 
switch (dayInEnglish) {
    case "monday":
        output = "Երկուշաբթի";
        break;
    case "tuesday":
        output = " երեքշաբթի";
        break;
    case "wednesday":
        output = "Չորեքշաբթի";
        break;
    case "thursday":
        output = "Հինգշաբթի";
        break;
    case "friday":
        output = "Ուրբաթ";
        break;
    case "saturday":
        output = "Շաբաթ";
        break;
    case "sunday":
        output = "Կիրակի";
        break;
    default:
        output = "Invalid input. Please enter a valid day of the week in English.";
}
console.log(output)




//Task5
//Calculator
//The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). Use switch-case
//Input: 5, 3, "+"Output: 8
//var num1 = +prompt("Enter the first number:");
//var num2 = +prompt("Enter the second number:");
//var operation = prompt("Choose the operation (+, -, *, /):");


var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
} else {
    var operation = prompt("Choose the operation (+, -, *, /):");
    var result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Error: Division by zero is not allowed.";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operation. Please choose +, -, *, or /.";
    }
}
console.log("Result: " + result);