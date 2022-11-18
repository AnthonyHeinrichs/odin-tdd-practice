import caesarCipher from "../functions/caesar-cipher";

test("abcdefghijklmnopqrstuvwxyz should be zabcdefghijklmnopqrstuvwxy", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza");
});

test("ABCDEFGHIJKLMNOPQRSTUVWXYZ should be JKLMNOPQRSTUVWXYZABCDEFGHI", () => {
  expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 9)).toBe("JKLMNOPQRSTUVWXYZABCDEFGHI");
});

test("Test same case: ABCDEFGHIjkLMNoPQRsTUVWXYZ should be STUVWXYZAbcDEFgHIJkLMNOPQR", () => {
  expect(caesarCipher("ABCDEFGHIjkLMNoPQRsTUVWXYZ", 18)).toBe("STUVWXYZAbcDEFgHIJkLMNOPQR");
});

test("Test punctuation: Have some coffee, relax, and keep coding! should be Exsb pljb zlccbb, obixu, xka hbbm zlafkd!", () => {
  expect(caesarCipher("Have some coffee, relax, and keep coding!", 23)).toBe("Exsb pljb zlccbb, obixu, xka hbbm zlafkd!");
});