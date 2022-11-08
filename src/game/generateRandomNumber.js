const { Random } = require('@woowacourse/mission-utils');

const generateRandomNumber = () => {
  const RandomNumber = [];
  while (RandomNumber.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!RandomNumber.includes(number)) {
      RandomNumber.push(number);
      this.RandomNumber = RandomNumber;
    }
  }
  return RandomNumber;
};

module.exports = generateRandomNumber;
