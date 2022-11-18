const validNumbers = (x, y) => {
  // Checking that both passed values are numbers
  if (typeof x === "number" && typeof y === "number") {
    return true;
  } else {
    return false;
  }
};
// Adding the two values passed
const add = (x, y) => {
  if (validNumbers(x, y)) {
    return x + y;
  } else {
    return "Not valid numbers";
  }
};
// Subtracting the two values passed
const subtract = (x, y) => {
  if (validNumbers(x, y)) {
    return x - y;
  } else {
    return "Not valid numbers";
  }
};
// Dividing the two values passed
const divide = (x, y) => {
  if (validNumbers(x, y)) {
    return x / y;
  } else {
    return "Not valid numbers";
  }
};
// Multiplying the two values passed
const multiply = (x, y) => {
  if (validNumbers(x, y)) {
    return x * y;
  } else {
    return "Not valid numbers";
  }
};
// Create calculator object containing our calc. functions
const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

module.exports = calculator;
