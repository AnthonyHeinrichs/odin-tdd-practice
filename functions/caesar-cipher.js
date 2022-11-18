function caesarCipher(string, shiftNum) {
  // Getting ASCII characters for upper and lower case to support our tests
  const alphCharLower = /[a-z]/;
  const alphCharUpper = /[A-Z]/;
  let cipherText = "";

  for (let i = 0; i < string.length; i++) {
    // Checking if the string elements match above regex 
    if (alphCharLower.test(string.charAt(i))) {
      // Returning a string created from specified sequence
      cipherText += String.fromCharCode(
        ((string.charCodeAt(i) - 97 + shiftNum) % 26) + 97
      );
    // Checking if the string elements match above regex 
    } else if (alphCharUpper.test(string.charAt(i))) {
      // Returning a string created from specified sequence
      cipherText += String.fromCharCode(
        ((string.charCodeAt(i) - 65 + shiftNum) % 26) + 65
      );
      // If no match on the string element, just return it
    } else {
      cipherText += string.charAt(i);
    }
  }
  return cipherText;
}

module.exports = caesarCipher;
