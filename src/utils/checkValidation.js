const { ERROR_MESSAGE } = require("../constants");

const checkValidation = (userInput) => {
  RangeNumber(userInput);
};

const RangeNumber = () => {
  const isNumberRegExp = /^[1-9]+$/;

  if (!isNumberRegExp.test(this.userInput)) {
    throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
  }

  return true;
};

module.exports = checkValidation;
