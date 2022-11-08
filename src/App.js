const { Console, Random } = require('@woowacourse/mission-utils');

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

  startGame() {
    this.pickRandomNumber();
  }

  pickRandomNumber() {
    while (this.answer.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.has(number)) {
        this.answer.add(number);
      }
    }
  }
}

module.exports = App;
