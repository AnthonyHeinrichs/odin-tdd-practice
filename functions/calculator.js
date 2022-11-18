const validNumbers = (x, y) => {
  if (typeof x === 'number' && typeof y === 'number') {
    return true
  } else {
    return false
  }
}

const add = (x, y) => {
  if (validNumbers(x, y)) {
    return x + y
  } else {
    return "Not valid numbers"
  }
}

const calculator = {
  add
}

module.exports = calculator