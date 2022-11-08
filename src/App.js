const { PHRASE, BASEBALL, GAME } = require('./constants');

const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answerNumberList = [];
  }

  printStartPhrase() {
    Console.print(PHRASE.START);
  }

  createNumberList() {
    this.answerNumberList.splice(0);
    while (this.answerNumberList.length < GAME.NUMBER_COUNT) {
      const number = Random.pickNumberInRange(GAME.MIN_NUMBER, GAME.MAX_NUMBER);
      if (!this.answerNumberList.includes(number))
        this.answerNumberList.push(number);
    }
  }

  receiveNumber() {
    Console.readLine(PHRASE.INPUT, (input) => {
      this.throwException(input);
      this.compareNumbers(input);
    });
  }

  throwException(input) {
    if (input.length !== GAME.NUMBER_COUNT || isNaN(input))
      throw new Error(PHRASE.ERROR);
    [...input].reduce((acc, cur) => {
      if (acc.includes(cur)) throw new Error(PHRASE.ERROR);
      return acc + cur;
    });
  }

  compareNumbers(input) {
    const result = { ball: 0, strike: 0 };
    const inputNumberList = [...input].map((number) => Number(number));

    inputNumberList.forEach((number, idx) => {
      if (number === this.answerNumberList[idx]) result.strike += 1;
      else if (this.answerNumberList.includes(number)) result.ball += 1;
    });
    this.printResult(result);
    this.processResult(result.strike);
  }

  printResult({ ball, strike }) {
    const RESULT_BALL = ball === 0 ? '' : ball + BASEBALL.BALL + ' ';
    const RESULT_STRIKE = strike === 0 ? '' : strike + BASEBALL.STRIKE;
    const RESULT_MESSAGE =
      ball === 0 && strike === 0
        ? BASEBALL.NOTHING
        : RESULT_BALL + RESULT_STRIKE;

    Console.print(RESULT_MESSAGE);
    if (strike === GAME.CORRECT_COUNT) Console.print(PHRASE.CORRECT);
  }

  processResult(strike) {
    if (strike === GAME.CORRECT_COUNT) {
      Console.readLine(PHRASE.RESTART, (input) => {
        this.printException(input);
        this.restartOrExit(input);
      });
    } else this.receiveNumber();
  }

  printException(input) {
    if (input !== GAME.RESTART && input !== GAME.EXIT)
      Console.print(PHRASE.ERROR2);
  }

  restartOrExit(input) {
    if (input === GAME.RESTART) {
      this.createNumberList();
      this.receiveNumber();
    }
    if (input === GAME.EXIT) Console.close();
  }

  play() {
    this.printStartPhrase();
    this.createNumberList();
    this.receiveNumber();
  }
}

module.exports = App;
