const { Console, Random } = require('@woowacourse/mission-utils');
const { validate } = require('./utils/validation');

class BaseballGame {
  constructor() {
    this.computerNumber = [];
    this.guess = [];
  }

  start() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumber = this.createComputerNumber();
  }

  playGame() {
    Console.readLine('숫자를 입력해주세요 : ', (guess) => {
      const userGuessToArray = guess.split('').map(Number);
      this.guess = userGuessToArray;
      validate(this.guess);
      const { strike, ball } = this.getResult();
    });
  }

  getResult() {
    const strike = this.countStrike();
    const ball = this.countBall();
    return { strike, ball };
  }

  countStrike() {
    const strike = this.guess.filter((number, idx) => number === this.computerNumber[idx]);
    return strike.length;
  }

  countBall() {
    const ball = this.guess.filter((number, idx) => {
      const indexOfComputerNumber = this.computerNumber.indexOf(number);
      return indexOfComputerNumber !== -1 && indexOfComputerNumber !== idx;
    });
    return ball.length;
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
