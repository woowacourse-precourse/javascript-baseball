const { GAME_RULE, ERROR_MESSAGE } = require("../constants");

const checkValidation = (userInput) => {
  RangeNumber(userInput);
  isNumberLengthThree(userInput);
};

const RangeNumber = () => {
  const isNumberRegExp = /^[1-9]+$/;

  if (!isNumberRegExp.test(this.userInput)) {
    throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
  }

  return true;
};

const isNumberLengthThree = () => {
  if (userInput.length !== GAME_RULE.LENGTH) {
    throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
  }

  return true;
};

module.exports = checkValidation;
