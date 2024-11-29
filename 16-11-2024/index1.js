//Task1
// Write a program that takes the user’s score and prints the corresponding grade based on the following rules:
// 90-100 = “A”
// 80-89 = “B”
// 70-79 = “C”
// 60-69 = “D”
// 0-59 = “F”
// Goal
// Use multiple if-else if statements.


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

