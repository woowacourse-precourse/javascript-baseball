const Computer = require('./Computer');
const { Console } = require('@woowacourse/mission-utils');

class Game {
  constructor() {
    this.computer = new Computer();
  }

  async start() {
    const answer = this.computer.makeAnswer();
    while (true) {
      const userNumber = await this.computer.getUserNumber();
      const result = this.computer.getResult(answer, userNumber);
      this.computer.printResult(result);
      if (result.strikeCnt === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        break;
      }
    }
    this.askRestart();
  }

  askRestart() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (userInput) => {}
    );
  }
}

module.exports = Game;
