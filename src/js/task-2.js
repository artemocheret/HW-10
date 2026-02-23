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