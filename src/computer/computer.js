const MissionUtils = require('@woowacourse/mission-utils');
const { NUMBER_LENGTH } = require('../constant/constant');

class Computer {
  addRandomNumber(numberArr) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!numberArr.includes(randomNumber)) {
      numberArr.push(randomNumber);
    }
  }

  createRandomNumber() {
    const numberArr = [];

    while (numberArr.length < NUMBER_LENGTH) {
      this.addRandomNumber(numberArr);
    }

    return numberArr.join('');
  }
}

module.exports = Computer;
