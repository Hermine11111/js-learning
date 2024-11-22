//Task1
//Multiplication Table
//Write a for loop to print the multiplication table of a given number n (e.g., n = 5).
//Example
//5 x 1 = 5
//5 x 2 = 10
//5 x 3 = 15
//5 x 4 = 20
//5 x 5 = 25
//5 x 6 = 30
//5 x 7 = 35
//5 x 8 = 40
//5 x 9 = 45
//5 x 10 = 50
//}





let n = +prompt("Please enter the number.")
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}


//Task2
//Write a for loop to replace all spaces in a string with hyphens (-).
//Example Input:
//let sentence = "I am learning JavaScript";
 //  Expected Output: “I-am-learning-JavaScript”
//}




let sentence = "I am learning JavaScript";
let result = "";
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
        result += "-";
    } else {
        result += sentence[i];
    }
}
console.log(result);
