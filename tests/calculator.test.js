import calculator from "../functions/calculator";

test("add(2, 7), 2 + 7 should 9", () => {
  expect(calculator.add(2, 7)).toBe(9);
});

test("add(46, 243), 46 + 243 should equal 289", () => {
  expect(calculator.add(46, 243)).toBe(289);
});

test("add(0.4, 1.7), 0.4 + 1.7 should be close to 2.1", () => {
  expect(calculator.add(0.4, 1.7)).toBeCloseTo(2.1);
});

test("add('3', 8), 3 is not a valid number", () => {
  expect(calculator.add("3", 8)).toBe("Not valid numbers");
});
