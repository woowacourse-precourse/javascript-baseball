const MissionUtils = require("@woowacourse/mission-utils");
const { NUMBER_VALUE } = require("../constants/index");

const isLessThanInputMaxLength = (size) => {
  return size < NUMBER_VALUE.LENGTH;
};

const getRandomNumber = (rangeStart, rangeEnd) => {
  return MissionUtils.Random.pickNumberInRange(rangeStart, rangeEnd);
};

const getComputerNumber = () => {
  const numbers = new Set();

  while (isLessThanInputMaxLength(numbers.size)) {
    numbers.add(getRandomNumber(NUMBER_VALUE.MIN, NUMBER_VALUE.MAX));
  }

  return [...numbers].join("");
};

module.exports = { getComputerNumber };
