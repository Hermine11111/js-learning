// Problem 2: Remove Duplicates
// Given an array [1, 2, 2, 3, 4, 4, 5]:
// Write a program to create a new array where duplicate elements are removed.
// The result should be [1, 2, 3, 4, 5].


const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueItems = [];
const obj = {};

for(let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!obj[item]) {
        obj[item] = true;
        uniqueItems.push(item)
    }
}  
  
console.log(uniqueItems);


