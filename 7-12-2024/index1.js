// Write a function that takes two parameters:
// -An array of numbers.
// -A target sum (number), which is the sum of the 
// indexes of numbers in the array.


//option 1

function findIndexesBySum(array, sumOfIndexes) {
    for(let i = 0; i < array.length; i++){
        let j = sumOfIndexes - i; 
        if(j > i && j < array.length);{
            return [i, j];
        }

    }
    return null; 
}
console.log(findIndexesBySum([2, 4, 6, 3, 9, 1], 5));




//option2

function findIndexesBySum(array, sumOfIndexes) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++){
            if(i + j === sumOfIndexes){
                return [i,j]; 
            }
            
        }
    }
    return null;
}
console.log(findIndexesBySum([1, 7, 3, 2, 5, 9], 8));
