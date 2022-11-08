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

  readAnswer() {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      const numbers = input //
        .split('')
        .map(Number);

      this.validateInput(numbers);
      this.getResult(numbers);

      if (this.strike !== 3) {
        this.readAnswer();
        return;
      }

      this.replay();
    });
  }

  getResult(numbers) {
    this.setStrike(numbers);
    this.setBall(numbers);
    this.print();
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

  setStrike(numbers) {
    this.strike = numbers.reduce(
      (count, number, index) => (number === this.baseballNumber[index] ? count + 1 : count),
      0
    );
  }

  setBall(numbers) {
    this.ball =
      numbers.reduce(
        (count, number) => (this.baseballNumber.includes(number) ? count + 1 : count),
        0
      ) - this.strike;
  }

  print() {
    if (this.strike === 3) {
      Console.print('3스트라이크');
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return this;
    }

    if (this.strike === 0 && this.ball === 0) {
      Console.print('낫싱');
      return this;
    }

    if (this.strike > 0 && this.ball > 0) {
      Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
      return this;
    }

    if (this.ball === 0) {
      Console.print(`${this.strike}스트라이크`);
      return this;
    }

    if (this.strike === 0) {
      Console.print(`${this.ball}볼`);
      return this;
    }
  }

  replay() {
    Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');

    Console.readLine('', input => {
      if (input === '1') {
        this.play();
        return;
      }

      if (input === '2') {
        Console.close();
        return;
      }
    });
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.pickNumber();
    this.readAnswer();
  }
}

module.exports = App;
