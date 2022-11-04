const { Random } = require('@woowacourse/mission-utils');
const COMPUTER = require('../constants/COMPUTER');

const getRandomNumber = () => {
  return Random.pickUniqueNumbersInRange(
    COMPUTER.START_NUMBER,
    COMPUTER.END_NUMBER,
    COMPUTER.COUNT
  );
};

module.exports = {
  getRandomNumber,
};
