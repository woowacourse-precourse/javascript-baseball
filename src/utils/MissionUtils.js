const MissionUtils = require("@woowacourse/mission-utils");
const { NUMBER_ONE_TO_NINE } = require("./RegExpress.js");

const getComputerNumber = (start, end) => {
  const computer = [];
  while (computer.length < 3) {
    const number = pickNumberRange(start, end);
    const isSelected = isSelectedNumber(number, computer);
  }
  return computer;
};

const pickNumberRange = (start, end) => {
  const number = MissionUtils.Random.pickNumberInRange(start, end);
  return number;
};

const isSelectedNumber = (number, computer) => {
  if (!computer.includes(number)) {
    computer.push(number);
  }
};

const getUserNumber = (question) => {
  MissionUtils.Console.readLine(question, (userInput) => {
    validateUserNumber(userInput);
  });
};

const validateUserNumber = (userInput) => {
  const isOneToNine = validateOneToNine(userInput);
  const isCorrectLength = validateLength(userInput, 3);
  const isNotOverlapped = validateOverlapped(userInput);

  if (isOneToNine && isCorrectLength && isNotOverlapped) {
    return true;
  } else {
    console.log("에러 발생 후 종료");
  }
};

const validateLength = (target, setLength) => {
  if (target.length === setLength) {
    return true;
  }

  return false;
};

const validateOverlapped = (target) => {
  const setTarget = new Set(target);
  if (target.length === setTarget.size) {
    return true;
  }
  return false;
};

const validateOneToNine = (target) => {
  return NUMBER_ONE_TO_NINE.test(target);
};

module.exports = { getComputerNumber, getUserNumber };
