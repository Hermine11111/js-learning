// Problem 1: Sum of Elements
// Given an array of numbers [1, 2, 3, 4, 5, 6]:
// Write a program to find the sum of all the elements in the array using only a for loop and the array.

let numbers = [1, 2, 3, 4, 5, 6];
let sumOfElements = 0;
for (let i = 0; i < numbers.length; i ++) {
    sumOfElements += numbers[i];
}
console.log( sumOfElements);
