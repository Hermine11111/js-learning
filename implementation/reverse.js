Array.prototype.customReverse = function() {
    let left = 0;
    let right = this.length - 1; 
    
    while (left < right) {
        let temp = this[left];
        this[left] = this[right];
        this[right] = temp;
        
        left++;
        right--;
    }
    
    return this; 
}


const arr = [1, 2, 3];
arr.customReverse();
console.log(arr);