const Computer = require('./Computer');
const { Console } = require('@woowacourse/mission-utils');
const { ANSWER, OPTION } = require('./constants/constants');

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
      if (result.strikeCnt === ANSWER.LENGTH) {
        Console.print(
          `${ANSWER.LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        break;
      }
    }
    this.askRestart();
  }

  askRestart() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (userInput) => {
        if (userInput === OPTION.RESTART) {
          return this.start();
        } else if (userInput === OPTION.END) {
          return this.end();
        } else {
          throw new Error('유효하지 않은 값이 입력되어 게임이 종료됩니다.');
        }
      }
    );
  }

  end() {
    Console.close();
  }
}

module.exports = Game;
