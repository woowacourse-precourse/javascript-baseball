const { ANSWER_IS_MUST_BE_THREE_LENGTH } = require("../constants/constant");
const MESSAGE = require("../constants/message");

const validateAnswer = (answer) => {
  if (isValidNumber(answer)) throw new Error(MESSAGE.ERROR.ANSWER_IS_NOT_A_VALID_NUMBER);
  if (isThreeLength(answer)) throw new Error(MESSAGE.ERROR.ANSWER_LENGTH_MUST_BE_THREE);
  if (isDuplicateNumbers(answer)) throw new Error(MESSAGE.ERROR.ANSWER_IS_MUST_BE_DIFFERENT_EACH_NUMBER);
};

const isValidNumber = (answer) => {
  return !answer.every((number) => number >= 1 && number <= 9 && !isNaN(number));
};

const isThreeLength = (answer) => {
  return answer.length !== ANSWER_IS_MUST_BE_THREE_LENGTH;
};

const isDuplicateNumbers = (answer) => {
  return answer.length !== [...new Set(answer)].length;
};

module.exports = validateAnswer;
