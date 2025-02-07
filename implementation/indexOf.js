Array.prototype.customIndexOf = function(searchElement, fromIndex = 0) { 
    let startIndex = Math.floor(fromIndex);

    if (isNaN(startIndex)) {
        startIndex = 0;
    } else {
        startIndex = Math.max(0, startIndex);
    }

    for (let i = startIndex; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i;
        }
    } 

    return -1;
};

const arr = [2, 5, 9,NaN, 2];

const index = arr.customIndexOf(9);
console.log(index); 

const notFound = arr.customIndexOf(NaN);
console.log(notFound); 