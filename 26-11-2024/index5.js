 ///includes(manual implementation)
 
 
let arr = [1, 10, '2', 3, 'joy', 4, 'happiness', 5, NaN];
let searchElement = NaN; 
let includesElement = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
        includesElement = true; 
        break;
    }
    if (Number.isNaN(arr[i]) && Number.isNaN(searchElement)) {
        includesElement = true;
        break;
    }
}

console.log(includesElement);