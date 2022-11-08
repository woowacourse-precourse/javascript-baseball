const { Random } = require("@woowacourse/mission-utils");

const generateRandomNumberArray = () => {
  const randomNumberArray = [];
  while (randomNumberArray.length < 3) {
    const digit = Random.pickNumberInRange(1, 9);
    if (!randomNumberArray.includes(digit)) {
      randomNumberArray.push(digit);
    }
  }
  return randomNumberArray;
};

module.exports = generateRandomNumberArray;
