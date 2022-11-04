const MissionUtils = require("@woowacourse/mission-utils");

const MakeRandomNumbers = () => {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }
  return randomNumbers;
};

module.exports = MakeRandomNumbers;
