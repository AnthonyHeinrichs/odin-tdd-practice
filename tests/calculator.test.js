import calculator from "../functions/calculator";

test("add(2, 7), 2 + 7 should 9", () => {
  expect(calculator.add(2, 7)).toBe(9);
});

test("add(46, 243), 46 + 243 should equal 289", () => {
  expect(calculator.add(46, 243)).toBe(289);
});

test("add(46, 243), -46 + 243 should equal 197", () => {
  expect(calculator.add(-46, 243)).toBe(197);
});

test("add(0.4, 1.7), 0.4 + 1.7 should be close to 2.1", () => {
  expect(calculator.add(0.4, 1.7)).toBeCloseTo(2.1);
});

test("add('3', 8), 3 is not a valid number", () => {
  expect(calculator.add("3", 8)).toBe("Not valid numbers");
});

test("subtract(2, 7), 2 - 7 should -5", () => {
  expect(calculator.subtract(2, 7)).toBe(-5);
});

test("subtract(243, 46), 243 - 46 should equal 197", () => {
  expect(calculator.subtract(243, 46)).toBe(197);
});

test("subtract(1.7, 0.4), 1.7 - 0.4 should be close to 1.3", () => {
  expect(calculator.subtract(1.7, 0.4)).toBeCloseTo(1.3);
});

test("subtract('3', 8), 3 is not a valid number", () => {
  expect(calculator.subtract(93, "bob")).toBe("Not valid numbers");
});