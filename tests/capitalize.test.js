const capitalize = require("../functions/capitalize");

test("Text should return capitalized (Happy path test 1)", () => {
  expect(capitalize("tony")).toBe("Tony");
});

test("Multi line text should return capitalized (Happy path test 1)", () => {
  expect(capitalize("welcome to my github")).toBe("Welcome to my github")
})
