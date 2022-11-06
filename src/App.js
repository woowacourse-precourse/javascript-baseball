const MissionUtils = require('@woowacourse/mission-utils');

class App {
  generateTargetNumber() {
    const target = [];

    while (target.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!target.includes(number)) target.push(number);
    }
    return target;
  }

  validateGuessedNumber(input) {
    if (input.length !== 3) {
      throw new Error('Input string length must be 3.');
    }
    if (input.split('').some((character) => Number.isNaN(Number(character)))) {
      throw new Error('Input string must be number.');
    }
  }

  convertInputStringToArray(input) {
    return input.split('').map((character) => Number(character));
  }
}

module.exports = App;
