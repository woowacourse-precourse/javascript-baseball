const { Console } = require('@woowacourse/mission-utils');
const { createRandomNumber } = require('../computer/computer');
const { NUMBER_LENGTH } = require('../constant/constant');
const inputValidator = require('../input/validator');
const Calculator = require('./Calculator');

class BaseballGame {
  constructor() {
    this.randomNumber = createRandomNumber();
    this.isCorrect = false;
    this.calculator = new Calculator();
  }

  init() {
    this.printStartMessage();
    this.startGame();
  }

  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  getResult(input) {
    const valid = inputValidator(input);

    if (!valid.isValid) {
      throw valid.message;
    }

    const { ball, strike } = this.calculator.calcScore(
      input,
      this.randomNumber
    );

    this.printResult(ball, strike);
  }

  printResult(ball, strike) {
    if (!ball && !strike) return Console.print('낫싱');

    if (strike === NUMBER_LENGTH) {
      this.isCorrect = true;
      return Console.print(
        `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
    }

    return Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  startGame() {
    while (!this.isCorrect) {
      Console.readLine('숫자를 입력해주세요 : ', (input) => {
        this.getResult(input);
      });
    }
  }
}

module.exports = BaseballGame;
