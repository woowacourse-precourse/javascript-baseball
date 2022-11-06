const { Random } = require('@woowacourse/mission-utils');

const createRandomNumbers = () => {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
    }
  }
  return randomNumbers;
};

module.exports = createRandomNumbers;
