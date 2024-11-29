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
