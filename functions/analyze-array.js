const analyzeArray = (arr) => {
  // Testing first that the passed value 'arr' is an array
  if (Object.prototype.toString.call(arr) != "[object Array]") {
    return "You must provide an array of numbers";
  } else {
    //Now checking if each element of the array is a number
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] != "number") {
        return "Your array must only contain numbers";
      }
    }
  }

  // Calculating the average of the arr and returning it
  const getAverage = () => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return Math.ceil(sum / arr.length || 0);
  };
  // Getting the min number of the passed arr
  const getMin = () => {
    return Math.min(...arr);
  };
  // Getting the max number of the passed arr
  const getMax = () => {
    return Math.max(...arr);
  };
  // Getting the length of the arr
  const getLength = () => {
    return arr.length;
  };
  // Returning the results of the above helper functions
  return {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length: getLength(),
  };
};

module.exports = analyzeArray;
