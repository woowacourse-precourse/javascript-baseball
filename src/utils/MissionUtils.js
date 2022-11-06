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

module.exports = { getComputerNumber };
