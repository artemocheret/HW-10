const processArray = (array, callback) => {
  return callback(array);
};

const getSum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);

const numbers = [5, 12, 8, 3, 20];

console.log("Sum:", processArray(numbers, getSum));
console.log("Min:", processArray(numbers, getMin));
console.log("Max:", processArray(numbers, getMax));