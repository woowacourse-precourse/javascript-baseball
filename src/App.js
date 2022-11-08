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

  validateInput(numbers) {
    if (numbers.length !== 3) {
      throw new Error('numbers length must be 3.');
    }

    if (numbers.some(number => !Number.isInteger(number))) {
      throw new Error('number must be integer');
    }

    if (numbers.some(number => number === 0)) {
      throw new Error('number must be between 1 and 9, inclusive.');
    }

    if (numbers.some(number => numbers.indexOf(number) !== numbers.lastIndexOf(number))) {
      throw new Error('numbers does not allow duplication.');
    }
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.pickNumber();
  }
}

module.exports = App;
