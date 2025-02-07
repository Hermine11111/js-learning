Array.prototype.customMap = function(callback) { 
    if (typeof callback !='function') {
        throw new TypeError (`${callback} is not a function`);
    }

    const newArray = [];

    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    } 

    return newArray;
}
  



const arr = [1, 2, 3];

const newArr = arr.customMap(function(item, index, array) {
    return item * 2;
});

console.log(newArr);  