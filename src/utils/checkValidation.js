const { GAME_RULE, ERROR_MESSAGE } = require("../constants");

const checkValidation = (userInput) => {
  this.userInput = userInput;
  isNumberLengthThree();
  RangeNumber();
  isOverLayRange(userInput);
};

const RangeNumber = () => {
  const isNumberRegExp = /^[1-9]+$/;

  if (!isNumberRegExp.test(this.userInput)) {
    throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
  }

  return true;
};

const isNumberLengthThree = () => {
  if (this.userInput.length !== GAME_RULE.LENGTH) {
    throw new Error(ERROR_MESSAGE.INVALID_LENGTH);
  } else {
    return true;
  }
};

const isOverLayRange = () => {
  const userInputSet = new Set(this.userInput);

  if (this.userInput.length !== userInputSet.size) {
    throw new Error(ERROR_MESSAGE.DUPLICATE);
  }

  return true;
};

module.exports = checkValidation;
