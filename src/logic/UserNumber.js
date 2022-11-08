const { NUMBER_ONE_TO_NINE } = require("../utils/RegExpress");

const validateUserNumber = (userInput) => {
  const isBetweenOneToNine = validateOneToNine(userInput);
  const isCorrectLength = validateLength(userInput, 3);
  const isNotOverlapped = validateOverlapped(userInput);

  if (isBetweenOneToNine && isCorrectLength && isNotOverlapped) {
    return true;
  } else {
    throw new Error("에러 발생 후 종료");
  }
};

const validateLength = (target, setLength) => {
  let validLength = target.length === setLength;
  return validLength;
};

const validateOverlapped = (target) => {
  const setTarget = new Set(target);
  let validOverlapped = target.length === setTarget.size;
  return validOverlapped;
};

const validateOneToNine = (target) => {
  return NUMBER_ONE_TO_NINE.test(target);
};

module.exports = { validateUserNumber };
