const MissionUtils = require('@woowacourse/mission-utils');

class App {
  static isValidMenuInput(input) {
    return input.length === 1 && Number(input) >= 1 && Number(input) <= 2;
  }

  static isValidPlayInput(input) {
    return (
      input.length === 3
      && Array.from(input).every((x) => Number(x) >= 1 && Number(x) <= 9)
    );
  }

  static pickThreeDigits() {
    const digits = [];
    while (digits.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!digits.includes(number)) {
        digits.push(number);
      }
    }
    return digits;
  }

  static getGuessArray(input) {
    return Array.from(input, Number);
  }

  play() { }
}

module.exports = App;
