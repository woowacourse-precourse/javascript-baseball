const MissionUtils = require("@woowacourse/mission-utils");
const { MIN_NUMBER, MAX_NUMBER, NUMBER_LENGTH } = require("./constants/constantValues");

const getThreeRandomNumbers = () => {
  const threeRandomNumber = new Set();
  while (threeRandomNumber.size < NUMBER_LENGTH) {
    const newNumber = MissionUtils.Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
    threeRandomNumber.add(newNumber);
  }

  return [...threeRandomNumber].join("");
};

module.exports = getThreeRandomNumbers;
