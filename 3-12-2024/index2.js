// Problem 2: Swap Keys and Values of an Object
// Write a function that takes an object and returns a new object where the keys and values are swapped.

// javascrip
// const obj = { a: "1", b: "2", c: "3" };

// const swapped = swapKeysAndValues(obj);
// // Output: { "1": "a", "2": "b", "3": "c" }




function swapKeysAndValues(obj) {
    const swappedObj = {};
    for (const key in obj) {
      swappedObj[obj[key]] = key;
    }
    return swappedObj;
  }
  const obj = { a: "1", b: "2", c: "3" };
  const swapped = swapKeysAndValues(obj);
  console.log(swapped);  