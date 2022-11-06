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

  async generateNum() {
    // 리팩토링 필요!!
    while (this.computer.length < CONSTANTS.INPUT_LENGTH) {
      const number = await MissionUtils.Random.pickNumberInRange(
        CONSTANTS.MIN_NUMBER,
        CONSTANTS.MAX_NUMBER,
      );
      if (!this.computer.includes(String(number))) {
        this.computer.push(String(number));
      }
    }
    return this;
  }
}

module.exports = NumberBaseballModel;
