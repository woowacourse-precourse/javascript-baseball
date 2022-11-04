const { Console } = require('@woowacourse/mission-utils');
const { createRandomNumber } = require('../computer/computer');

class BaseballGame {
  constructor() {
    this.randomNumber = createRandomNumber();
    this.init();
  }

  init() {
    this.printStartMessage();
  }

  printStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

module.exports = BaseballGame;
