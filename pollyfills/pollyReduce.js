// arr.reduceRight((acc,curr,i,arr)=>{},initialvalue)

Array.prototype.myReduce = function (cb, initialvalue) {
  var accumulator = initialvalue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const nums = [1, 2, 3, 4];
const sums = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sums);
