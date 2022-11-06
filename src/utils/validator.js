const { EXCEPTION, CASE } = require("../constants/index.js");

const isValidUserInput = (input) => {
  if (input.length !== EXCEPTION.VALID_NUMBER_LENGTH) return false;
  if (isNaN(input)) return false;
  if (input.includes("0")) return false;
  return true;
};

const isValidUserAskInput = (input) => {
  if (input === CASE.RESTART) return true;
  if (input === CASE.END) return true;
  return false;
};

const isNothing = (userInputResult) => {
  if (userInputResult.every((result) => result === 0)) return true;
  return false;
};

const isAnswer = (strike) => {
  if (strike === 3) return true;
  return false;
};

exports.isValidUserInput = isValidUserInput;
exports.isValidUserAskInput = isValidUserAskInput;
exports.isNothing = isNothing;
exports.isAnswer = isAnswer;
