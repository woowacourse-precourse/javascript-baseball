const { Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  GAMESTART: '숫자 야구 게임을 시작합니다.',
};

class App {
  constructor() {
    this.answer = new Set();
  }

  play() {
    Console.print(MESSAGE.GAMESTART);
    this.startGame();
  }

  startGame() {}
}

module.exports = App;
