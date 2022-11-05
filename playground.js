// Array.equals(compare:Array) : boolean
Array.prototype.equals = function (compare) {
  const MAX_LENGTH = Math.max(this.length, compare.length);
  for (let i = 0; i < MAX_LENGTH; i++) {
    if (this[i] !== compare[i]) break;
    if (i === MAX_LENGTH - 1) {
      return true;
    }
  }
  return false;
};

let arr = [1, 8, 3];
let arr2 = [1, 3, 8];

console.log(arr.equals(arr2));
