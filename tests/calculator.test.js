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

test("subtract(93, 'bob'), 3 is not a valid number", () => {
  expect(calculator.subtract(93, "bob")).toBe("Not valid numbers");
});

test("divide(2, 7), 2 + 7 should close to 0.28", () => {
  expect(calculator.divide(2, 7)).toBeCloseTo(0.285);
});

test("divide(243, 46), 243 + 46 should equal 197", () => {
  expect(calculator.divide(243, 46)).toBeCloseTo(5.28);
});

test("divide(20, 5), 20 + 5 should be 4", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test("divide('cat', 'dog'), 3 is not a valid number", () => {
  expect(calculator.divide("cat", "dog")).toBe("Not valid numbers");
});

test("multiply(2, 7), 2 * 7 should close to 0.28", () => {
  expect(calculator.multiply(2, 7)).toBe(14);
});

test("multiply(243, 46), 243 * 46 should equal 11178", () => {
  expect(calculator.multiply(243, 46)).toBeCloseTo(11178);
});

test("multiply(20, 5), 20 * 5 should be 100", () => {
  expect(calculator.multiply(20, 5)).toBe(100);
});

test("multiply('cat', 'dog'), 3 is not a valid number", () => {
  expect(calculator.multiply(true, false)).toBe("Not valid numbers");
});
