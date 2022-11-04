const MissionUtils = require('@woowacourse/mission-utils');

const getRandomNumber = (minNumber, maxNumber) => {
  return MissionUtils.Random.pickNumberInRange(minNumber, maxNumber);
};

const getComputerNumber = () => {
  const computerNumber = new Set();

  while (computerNumber.size < 3) {
    computerNumber.add(getRandomNumber(1, 9));
  }

  return [...computerNumber].join('');
};

module.exports = getComputerNumber;
