const MissionUtils = require("@woowacourse/mission-utils");

const getThreeRandomNumbers = () => {
  const threeRandomNumber = new Set();
  while (threeRandomNumber.size < 3) {
    const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    threeRandomNumber.add(newNumber);
  }

  return [...threeRandomNumber].join("");
};

module.exports = getThreeRandomNumbers;
