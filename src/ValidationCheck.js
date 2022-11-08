const {
  MAX_NUMBER_LENGTH,
  MAX_NUMBER_RANGE,
  MIN_NUMBER_RANGE,
} = require("./constants/condition.js");

const isValidUserNumberInput = (userInput) => {
  if (!hasOnlyNumber(userInput)) {
    return { isValid: false, errorType: "INVALID_INPUT_TYPE" };
  }
  if (!hasValidLength(userInput)) {
    return { isValid: false, errorType: "INVALID_INPUT_LENGTH" };
  }
  if (!hasOnlyUniqueNumber(userInput)) {
    return { isValid: false, errorType: "DUPLICATED_NUMBER" };
  }
  if (!hasOnlyValidRangeNumber(userInput)) {
    return { isValid: false, errorType: "INVALID_INPUT_RANGE" };
  }

  return { isValid: true };
};

const hasOnlyNumber = (userInput) => {
  return userInput
    .split("")
    .map((eachLetter) => parseInt(eachLetter), 10)
    .every((number) => !isNaN(number));
};
const hasValidLength = (userInput) => {
  return userInput.length === MAX_NUMBER_LENGTH;
};
const hasOnlyUniqueNumber = (userInput) => {
  const duplicateCheckSet = new Set(userInput.split(""));

  return duplicateCheckSet.size === MAX_NUMBER_LENGTH;
};
const hasOnlyValidRangeNumber = (userInput) => {
  const isValidRangeNumber = (number) => {
    return MIN_NUMBER_RANGE <= number && number <= MAX_NUMBER_RANGE;
  };

  return userInput
    .split("")
    .map((eachLetter) => parseInt(eachLetter), 10)
    .every(isValidRangeNumber);
};

module.exports = isValidUserNumberInput;
