Array.prototype.customFilter = function(callback) { 
    if (typeof callback !='function') {
        throw new TypeError (`${callback} is not a function`);
    }

    const filteredArray = [];

    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    } 

    return filteredArray;
}



const arr = [1, 2, 3, 4, 5];

const newArr = arr.customFilter(function(item, index, array) {
    return item % 2 === 0;
});

console.log(newArr); 