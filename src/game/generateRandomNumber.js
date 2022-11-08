const { Random } = require('@woowacourse/mission-utils');
const checkInvalidRandomNumber = require('../utils/checkInvalidRandomNumber');

const generateRandomNumber = () => {
  let newRandomNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
  while (checkInvalidRandomNumber(newRandomNumber)) {
    newRandomNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  return newRandomNumber;
};

module.exports = generateRandomNumber;
