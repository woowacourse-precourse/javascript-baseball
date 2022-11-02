const MissionUtils = require("@woowacourse/mission-utils");

const getRandomThreeNumber = () => {
  const numbers = [];
  while (numbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
};

module.exports = getRandomThreeNumber;
