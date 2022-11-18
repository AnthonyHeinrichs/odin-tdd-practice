function reverseString(string) {
  let newString = string.split("")
  newString.reverse()
  return newString.join("")
}

module.exports = reverseString;
