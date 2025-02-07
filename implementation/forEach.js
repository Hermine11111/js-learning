 Array.prototype.customForEach = function(callback) { 
    if (typeof callback !='function') {
        throw new TypeError (`${callback} is not a function`);
    }

    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    } 
}
  


const arr = [1, 2, 3];

arr.customForEach(function(item, index, array) {
    console.log(`Element: ${item}, Index: ${index}`);
});