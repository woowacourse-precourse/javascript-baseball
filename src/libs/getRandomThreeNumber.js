const MissionUtils = require("@woowacourse/mission-utils");

const getRandomThreeNumber = () => {
  const numbers = [];
  while (numbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numbers.includes(String(number))) {
      numbers.push(String(number));
    }
  }
  return numbers;
};

module.exports = getRandomThreeNumber;
