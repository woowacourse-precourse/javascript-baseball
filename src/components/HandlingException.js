const handleException = (inputArray, digit) => {};

const checkDuplicate = (inputArray, digit) => {
  return [...new Set(inputArray)].length !== digit;
};

const checkValidNumber = inputArray => {
  const inputString = inputArray.join('');
  const regExp = /[^1-9]/;
  return regExp.test(inputString);
};

module.exports = handleException;
