const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
  }

  setAnswer() {
    this.answer = [];
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  readInput() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine('숫자를 입력해 주세요 : ', (input) => {
        this.userInput = Array.from(input, Number);
        resolve();
      });
    });
  }

  setCount(answer, userInput) {
    this.count = {
      ball: 0,
      strike: 0,
    };
    userInput.forEach((number, index) => {
      const findIndex = answer.findIndex((element) => element === number);

      if (findIndex === index) {
        this.count.strike += 1;
      } else if (findIndex !== -1) {
        this.count.ball += 1;
      }
    });
  }

  setHint(count) {
    this.hint = '';
    if (count.ball > 0) {
      this.hint = `${count.ball}볼`;
    }
    if (count.strike > 0) {
      this.hint += ` ${count.strike}스트라이크`;
    }
    if (this.hint === '') {
      this.hint = '낫싱';
    }
    this.hint.trimStart();
  }

  async play() {
    this.setAnswer();
    await this.readInput();
    this.setCount(this.answer, this.userInput);
    this.setHint(this.count);
  }
}

module.exports = App;
