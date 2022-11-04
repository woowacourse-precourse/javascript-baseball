const MissionUtils = require('@woowacourse/mission-utils');
const { NUMBER_LENGTH } = require('../constant/constant');

function addRandomNumber(numberArr) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

  if (!numberArr.includes(randomNumber)) {
    numberArr.push(randomNumber);
  }
}

function createRandomNumber() {
  const numberArr = [];

  while (numberArr.length < NUMBER_LENGTH) {
    addRandomNumber(numberArr);
  }

  return numberArr.join('');
}

module.exports.createRandomNumber = createRandomNumber;
