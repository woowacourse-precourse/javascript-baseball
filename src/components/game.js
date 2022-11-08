const { Console } = require('@woowacourse/mission-utils');
const Computer = require('./computer');
const Validation = require('./validation');
const { PROMPT, SUCCESS, RESTART, END } = require('../constant/constant');

class Game {
  constructor() {
    this.computer = new Computer();
    this.validation = new Validation();
    this.strike = 0;
    this.ball = 0;
  }

  setStrike(numbers) {
    const baseballNumber = this.computer.getNumber();

    this.strike = numbers.reduce(
      (count, number, index) => (number === baseballNumber[index] ? count + 1 : count),
      0
    );
  }

  setBall(numbers) {
    const baseballNumber = this.computer.getNumber();

    this.ball =
      numbers.reduce((count, number) => (baseballNumber.includes(number) ? count + 1 : count), 0) -
      this.strike;
  }

  getResult(numbers) {
    this.setStrike(numbers);
    this.setBall(numbers);
    this.print();
  }

  print() {
    if (this.strike === 3) {
      Console.print('3스트라이크');
      Console.print(SUCCESS);
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
    Console.print(RESTART);

    Console.readLine('', input => {
      if (input === '1') {
        this.start();
        return;
      }

      if (input === '2') {
        Console.close();
        Console.print(END);
        return;
      }
    });
  }

  readAnswer() {
    Console.readLine(PROMPT, input => {
      const numbers = input //
        .split('')
        .map(Number);

      this.validation.validateInput(numbers);
      this.getResult(numbers);

      if (this.strike !== 3) {
        this.readAnswer();
        return;
      }

      this.replay();
    });
  }

  start() {
    this.computer.pickNumber();
    this.readAnswer();
  }
}

module.exports = Game;
