const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.baseballNumber;
    this.strike;
    this.ball;
  }

  init() {
    this.baseballNumber = [];
    this.strike = 0;
    this.ball = 0;
  }

  pickNumber() {
    this.init();

    while (this.baseballNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!this.baseballNumber.includes(number)) {
        this.baseballNumber.push(number);
      }
    }
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.pickNumber();
  }
}

module.exports = App;
