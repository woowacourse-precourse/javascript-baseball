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
    this.pickRandomNumber();
    this.playInning();
  }

  pickRandomNumber() {
    while (this.answer.size < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.answer.has(number)) {
        this.answer.add(number);
      }
    }
  }

  playInning() {
    this.getUserInput();
  }

  getUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      this.isValidInput(input);
    });
  }

  isValidInput(input) {
    const checkDuplicate = new Set(input.split(''));
    if (
      [...input].includes('0') ||
      input.length !== 3 ||
      checkDuplicate.size !== 3
    ) {
      throw new Error('잘못된 값을 입력했습니다');
    }
    return this;
  }
}
module.exports = App;
