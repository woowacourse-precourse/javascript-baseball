const MissionUtils = require('@woowacourse/mission-utils');

const getRandomNumber = (minNum, maxNum) => {
  return MissionUtils.Random.pickNumberInRange(minNum, maxNum);
};

const getComputerNumber = () => {
  const computerNumber = new Set();

  while (computerNumber.size < 3) {
    computerNumber.add(getRandomNumber(1, 9));
  }

  return [...computerNumber].join('');
};

module.exports = getComputerNumber;
