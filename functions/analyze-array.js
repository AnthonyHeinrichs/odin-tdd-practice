const analyzeArray = (arr) => {

  const getAverage = () => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return Math.ceil(sum / arr.length || 0);
  };

  const getMin = () => {
    return Math.min(...arr)
  }

  const getMax = () => {
    return Math.max(...arr)
  }

  const getLength = () => {
    return arr.length
  }

  if (Object.prototype.toString.call(arr) != '[object Array]') {
    return 'You must provide an array of numbers'
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] != 'number') {
        return 'Your array must only contain numbers'
      }
    }
  }

  return {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length: getLength()
  };
};

module.exports = analyzeArray;
