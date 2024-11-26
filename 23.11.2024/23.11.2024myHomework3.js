// Problem 1: Sum of Elements
// Given an array of numbers [1, 2, 3, 4, 5, 6]:
// Write a program to find the sum of all the elements in the array using only a for loop and the array.

let numbers = [1, 2, 3, 4, 5, 6];
let sumOfElements = 0;
for (let i = 0; i < numbers.length; i ++) {
    sumOfElements += numbers[i];
}
console.log( sumOfElements);



// Problem 2: Remove Duplicates
// Given an array [1, 2, 2, 3, 4, 4, 5]:
// Write a program to create a new array where duplicate elements are removed.
// The result should be [1, 2, 3, 4, 5].


let arr = [1, 2, 2, 3, 4, 4, 5];
let noDuplicates = [];

for (let i = 0; i < arr.length; i++) {
    if (!noDuplicates.includes(arr[i])) {
        noDuplicates.push(arr[i]);
    }
}
console.log(noDuplicates);



// Problem 3: Longest Text
// Given an array of strings ["React", "JavaScript", "Redux", "PHP", "C#"]:
// Write a program to find the longest word in the array.
// Solution in JavaScript using only for loop and arrays:


let words = ["React", "JavaScript", "Redux", "PHP", "C#"];
let longestWord = "";  

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log(longestWord);