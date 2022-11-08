const MissionUtils = require("@woowacourse/mission-utils");

const createComputerNumber = (start, end) => {
  const computer = [];
  while (computer.length < 3) {
    const number = pickNumberBetweenRange(start, end);
    const isSelected = isSelectedNumber(number, computer);
  }
  return computer;
};

const pickNumberBetweenRange = (start, end) => {
  const number = MissionUtils.Random.pickNumberInRange(start, end);
  return number;
};

const isSelectedNumber = (number, computer) => {
  if (!computer.includes(number)) {
    computer.push(number);
  }
};
module.exports = { createComputerNumber };
