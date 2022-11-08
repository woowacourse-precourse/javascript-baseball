const { Console, Random } = require('@woowacourse/mission-utils');
const { NUMBER, MESSAGE, GAME, ERROR } = require('../constant/baseballGame');

class BaseballGame {
  start() {
    const answer = BaseballGame.createAnswer();

    BaseballGame.startMessage();
    this.inputNumber(answer);
  }

  progress(answer, strike) {
    if (strike === 3) {
      Console.print(MESSAGE.END);
      this.inputRestartOrEnd();
    }

    this.inputNumber(answer);
  }

  static startMessage() {
    Console.print(MESSAGE.START);
  }

  resultMessage(answer, number) {
    const ball = BaseballGame.getBall(answer, number);
    const strike = BaseballGame.getStrike(answer, number);

    let message = '';

    if (ball) {
      message += `${ball}${GAME.BALL} `;
    }

    if (strike) {
      message += `${strike}${GAME.STRIKE}`;
    }

    if (!ball && !strike) {
      message += `${GAME.NOTHING}`;
    }

    Console.print(message);
    this.progress(answer, strike);
  }

  static getBall(answer, number) {
    let ball = 0;

    [...number].forEach((digit, index) => {
      if (digit !== answer[index] && answer.includes(digit)) {
        ball += 1;
      }
    });

    return ball;
  }

  static getStrike(answer, number) {
    let strike = 0;

    [...number].forEach((digit, index) => {
      if (digit === answer[index]) {
        strike += 1;
      }
    });

    return strike;
  }

  static createAnswer() {
    const answer = [];

    while (answer.length < NUMBER.DIGIT) {
      const number = Random.pickNumberInRange(
        NUMBER.MINIMUM_RANGE,
        NUMBER.MAXIMUM_RANGE
      );

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }

    return answer.join('');
  }

  inputNumber(answer) {
    Console.readLine(MESSAGE.INPUT, (number) => {
      BaseballGame.validateInputNumber(number);
      this.resultMessage(answer, number);
    });
  }

  static validateInputNumber(number) {
    if (!Number(number)) {
      throw new Error(ERROR.NUMBER);
    }
    if (number.length !== NUMBER.DIGIT) {
      throw new Error(ERROR.LENGTH);
    }
    if ([...new Set(number)].length !== NUMBER.DIGIT) {
      throw new Error(ERROR.OVERLAP);
    }
  }

  inputRestartOrEnd() {
    Console.readLine(MESSAGE.OPTION, (number) => {
      BaseballGame.validateInputRestartOrEnd(number);
      if (number === '1') {
        this.start();
      }
      if (number === '2') {
        Console.close();
      }
    });
  }

  static validateInputRestartOrEnd(number) {
    if (number !== '1' && number !== '2') {
      throw new Error(ERROR.OPTION);
    }
  }
}

module.exports = BaseballGame;
