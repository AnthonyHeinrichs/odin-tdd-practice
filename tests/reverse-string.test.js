const reverseString = require("../functions/reverse-string")

test("Text should return reversed (Happy path test 1)", () => {
  expect(reverseString("tony")).toBe("ynot");
});

test("Multi line text should return reversed (Happy path test 1)", () => {
  expect(reverseString("Welcome to my github")).toBe("buhtig ym ot emocleW")
})