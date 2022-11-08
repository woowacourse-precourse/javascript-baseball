const MissionUtils = require('@woowacourse/mission-utils');
const InputCheck = require('./InputCheck');

class RandomProduce {
  static createRandom() {
    const numbers = [];
    while (numbers.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!numbers.includes(random)) numbers.push(random);
    }
    const inputCheck = new InputCheck();
    inputCheck.AvailCheck(numbers);

    return numbers;
  }
}
module.exports = RandomProduce;
