Array.prototype.customFind = function(callback) { 
    if (typeof callback !='function') {
        throw new TypeError (`${callback} is not a function`);
    }

    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    } 

    return undefined;
}



const arr = [5, 44, 12, 8, 130, 45];

const foundElement = arr.customFind(function(item, index, array) {
    return item > 10;
});

console.log(foundElement);
