function capitalize(string) {
  /* Taking first character of our string and upcasing it, 
  then concatenatenating it to original string after removing first char*/
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
