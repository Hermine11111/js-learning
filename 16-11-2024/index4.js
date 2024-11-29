//Task4
// Day Translation
// Create a program that uses a switch-case to translate a day of the week from English to Armenian. 
// The user should input the name of the day in English, and the program should return the corresponding Armenian name.
// Input: “Monday”
// Output: “Երկուշաբթի”



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


