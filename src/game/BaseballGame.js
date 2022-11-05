const { Console } = require('@woowacourse/mission-utils');
const { createRandomNumber } = require('../computer/computer');
const inputValidator = require('../input/validator');

class BaseballGame {
  constructor() {
    this.randomNumber = createRandomNumber();
    this.init();
    this.isCorrect = false;
  }

  init() {
    this.printStartMessage();
    this.startGame();
  }

  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  startGame() {
    while (!this.isCorrect) {
      Console.readLine('숫자를 입력해주세요: ', (input) => {});
    }
  }
}

module.exports = BaseballGame;
