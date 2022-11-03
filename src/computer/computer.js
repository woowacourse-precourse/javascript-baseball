const MissionUtils = require('@woowacourse/mission-utils');

function addRandomNumber(numberArr) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

  if (!numberArr.includes(randomNumber)) {
    numberArr.push(randomNumber);
  }
}

function createRandomNumber() {
  const numberArr = [];

  while (numberArr.length < 3) {
    addRandomNumber(numberArr);
  }

  return numberArr.join('');
}

module.exports.createRandomNumber = createRandomNumber;
