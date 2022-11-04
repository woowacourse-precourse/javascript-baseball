const { Console, Random } = require('@woowacourse/mission-utils');
const { validate } = require('./utils/');

class BaseballGame {
  constructor() {
    this.computerNumber = [];
    this.guess = [];
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumber = this.createComputerNumber();
    this.getUserInput();
  }

  getUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', (guess) => {
      const userGuessToArray = guess.split('').map(Number);
      this.guess = userGuessToArray;
      validate(this.guess);
    });
  }

  createComputerNumber() {
    const computerNumber = new Set();
    while (computerNumber.size < 3) {
      computerNumber.add(Random.pickNumberInRange(1, 9));
    }
    return Array.from(computerNumber);
  }
}

module.exports = BaseballGame;
