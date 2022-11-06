const { Console } = require('@woowacourse/mission-utils');
const { createRandomNumber } = require('../computer/computer');
const inputValidator = require('../input/validator');

class BaseballGame {
  constructor() {
    this.randomNumber = createRandomNumber();
    this.isCorrect = false;
  }

  init() {
    this.printStartMessage();
    this.startGame();
  }

  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  calcScore(input, randomNumber) {
    this.randomNumber = randomNumber;
    const ball = this.countBall(input, this.randomNumber);
    const strike = this.countStrike(input, this.randomNumber);

    if (!ball && !strike) return '낫싱';
    if (strike === 3) {
      this.isCorrect = true;
      return `${strike}스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`;
    }
    return `${ball}볼 ${strike}스트라이크`;
  }

  isBall(num, idx, randomNumber) {
    return randomNumber.includes(num) && idx !== [...randomNumber].indexOf(num);
  }

  countBall(input, randomNumber) {
    let ball = 0;

    [...input].forEach((num, idx) => {
      if (this.isBall(num, idx, randomNumber)) ball++;
    });

    return ball;
  }

  getResult(input) {
    const valid = inputValidator(input);

    if (!valid.isValid) {
      throw valid.message;
    }

    const result = this.calcScore(input, this.randomNumber);
    Console.print(result);
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
