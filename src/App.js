const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.inputCallback = this.inputCallback.bind(this);
  }

  generateRandomNumbers() {
    this.answerArray = [];
    while (this.answerArray.length < 3) {
      const inputString = Random.pickNumberInRange(1, 9);

      if (!this.answerArray.includes(inputString)) {
        this.answerArray.push(inputString);
      }
    }
  }

  readUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', this.inputCallback);
  }

  convertToNumberArray(inputString) {
    return inputString.split('').map((item) => Number(item));
  }

  inputCallback() {}

  play() {}
}

module.exports = App;
