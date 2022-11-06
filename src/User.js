const MissionUtils = require('@woowacourse/mission-utils');

class User {
  constructor() {
    this.numberArray = [];
  }

  getNumberArrayFromInput() {
    return new Promise((resolve, reject) => this.getInput(resolve, reject));
  }

  getInput(resolve, reject) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', input =>
      this.setNumberArray(input, resolve, reject),
    );
  }

  setNumberArray(input, resolve, reject) {
    if (!this.validInput(input)) {
      reject('입력값이 잘못되었습니다.');
    }

    this.numberArray = [...this.makeInputToArray(input)];
    resolve(this.numberArray);
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
