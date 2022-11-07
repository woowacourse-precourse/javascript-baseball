const handleException = (inputArray, digit) => {};

const checkDuplicate = (inputArray, digit) => {
  return [...new Set(inputArray)].length !== digit;
};

module.exports = handleException;
