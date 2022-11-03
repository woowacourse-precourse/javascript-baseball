const MissionUtils = require("@woowacourse/mission-utils");

function createRandomNumbers() {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumbers.includes(number.toString())) {
      randomNumbers.push(number.toString());
    }
  }
  return randomNumbers;
}

module.exports = createRandomNumbers;
