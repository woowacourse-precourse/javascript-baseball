const Computer = require('./Computer');
const { Console } = require('@woowacourse/mission-utils');

class Game {
  constructor() {
    this.computer = new Computer();
  }

  async start() {
    const answer = this.computer.makeAnswer();
    const userNumber = await this.computer.getUserNumber();
    const result = this.computer.getResult(answer, userNumber);
    this.computer.printResult(result);
    if (result.strikeCnt === 3) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    }
  }
}

module.exports = Game;
