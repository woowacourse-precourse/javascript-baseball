const MissionUtils = require('@woowacourse/mission-utils');

const CONSTANTS = require('../constant');

class NumberBaseballModel {
  constructor() {
    this.computer = [];
  }

  splitNumber(num) {
    return num.split('');
  }

  inputValidCheck(strArray) {
    if (
      this.inputLengthCheck(strArray) &&
      this.inputDuplicatedCheck(strArray) &&
      this.inputNumCheck(strArray)
    ) {
      return true;
    }
    return false;
  }

  inputLengthCheck(strArray) {
    return strArray.length === CONSTANTS.INPUT_LENGTH;
  }

  inputDuplicatedCheck(strArray) {
    return strArray.length === new Set(strArray).size;
  }

  inputNumCheck(strArray) {
    return strArray.every((num) => CONSTANTS.NUMBERS.includes(num));
  }

  generateNum() {
    while (this.computer.length < CONSTANTS.INPUT_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(
        CONSTANTS.MIN_NUMBER,
        CONSTANTS.MAX_NUMBER,
      );
      if (!this.computer.includes(String(number))) {
        this.computer.push(String(number));
      }
    }
    return this;
  }

  getScore(strArray) {
    return strArray.reduce((acc, cur, idx) => this.findNumState(acc, cur, idx), {
      nothing: 0,
      ball: 0,
      strike: 0,
    });
  }

  findNumState(acc, strNum, index) {
    if (this.isStrike(strNum, index)) {
      return { ...acc, strike: acc.strike + 1 };
    } else if (this.isBall(strNum)) {
      return { ...acc, ball: acc.ball + 1 };
    }
    return { ...acc, nothing: acc.nothing + 1 };
  }

  isBall(strNum) {
    return this.computer.includes(strNum);
  }

  isStrike(strNum, index) {
    return this.computer.indexOf(strNum) === index;
  }

  isAnswer(result) {
    return result.strike === CONSTANTS.INPUT_LENGTH;
  }

  clear() {
    this.computer = [];
  }
}

module.exports = NumberBaseballModel;
