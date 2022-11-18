const analyzeArray = require("../functions/analyze-array");

test("Happy path: anaylzeArray returns object with correct values", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("Happy path 2: anaylzeArray returns object with correct values", () => {
  expect(analyzeArray([230, 24, 743, 9, 234, 62, 34])).toEqual({
    average: 191,
    min: 9,
    max: 743,
    length: 7,
  });
});

test("Not passing an array", () => {
  expect(analyzeArray(3)).toBe("You must provide an array of numbers");
});

test("Passing an array that provides more than just numbers", () => {
  expect(analyzeArray([3, 4, "dog", "cat", false])).toBe(
    "Your array must only contain numbers"
  );
});
