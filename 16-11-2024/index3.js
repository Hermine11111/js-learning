//Task3
// Month Check
// Write a program that takes the number of a month (1-12) and prints which season it belongs to:
// 12, 1, 2 -> “Winter”
// 3, 4, 5 -> “Spring”
// 6, 7, 8 -> “Summer”
// 9, 10, 11 -> “Autumn”


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

