const MissionUtils = require('@woowacourse/mission-utils');

class User {
  constructor() {
    this.numberArray = [];
  }

  getNumberArrayFromInput() {
    return new Promise((resolve, reject) => this.getInput(resolve, reject));
  }

  getInput(resolve) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input => {
      this.setNumberArray(input);
      resolve();
    });
  }

  setNumberArray(input) {
    if (!this.validInput(input)) {
      throw new Error('입력값이 잘못되었습니다.');
    }

    const inputArray = this.makeInputToArray(input);
    this.numberArray = [...inputArray];
  }

  validInput(input) {
    if (input.length > 3) return false;
    const validRegex = /^[1-9]*$/;
    return validRegex.test(input);
  }

  makeInputToArray(input) {
    return [
      ...input
        .toString()
        .split('')
        .map(i => +i),
    ];
  }
}

module.exports = User;
