
//Task5
//Calculator
//The program should ask for two numbers and an operation (addition, subtraction, multiplication, or division). Use switch-case
//Input: 5, 3, "+"Output: 8
//var num1 = +prompt("Enter the first number:");
//var num2 = +prompt("Enter the second number:");
//var operation = prompt("Choose the operation (+, -, *, /):");



var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
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


console.log("Result: " + result);