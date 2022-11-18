function reverseString(string) {
  // Splitting string by each element, reversing it, then joining it back together
  let newString = string.split("");
  newString.reverse();
  return newString.join("");
}

module.exports = reverseString;
