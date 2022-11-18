function caesarCipher(string, shiftNum) {
  const alphCharLower = /[a-z]/
  const alphCharUpper = /[A-Z]/
  let cipherText = ''

  for (let i = 0; i < string.length; i++) {
    if(alphCharLower.test(string.charAt(i))) {
      cipherText += String.fromCharCode((string.charCodeAt(i) - 97 + shiftNum)%26 + 97)
    } else if (alphCharUpper.test(string.charAt(i))) {
      cipherText += String.fromCharCode((string.charCodeAt(i) - 65 + shiftNum)%26 + 65)
    } else {
      cipherText += string.charAt(i)
    }
  }
  return cipherText
}

module.exports = caesarCipher