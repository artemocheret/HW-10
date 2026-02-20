// 1 завдання
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

// 2 завдання
const operate = (a, b, callback) => {
  return callback(a, b);
};

console.log(
  "Віднімання:",
  operate(10, 5, (a, b) => a - b),
);
console.log(
  "Додавання:",
  operate(10, 5, (a, b) => a + b),
);
console.log(
  "Множення:",
  operate(10, 5, (a, b) => a * b),
);
console.log(
  "Ділення:      ",
  operate(10, 5, (a, b) => a / b),
);

// з лмс
// 1 завдання
const numbers2 = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

function countItems(array, condition) {
  let count = 0;

  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }

  return count;
}

const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

console.log("Парних чисел:", countItems(numbers2, isEven));
console.log("Чисел більше 10:", countItems(numbers2, isLarge));
console.log("Коротких слів:", countItems(words, isShort));
