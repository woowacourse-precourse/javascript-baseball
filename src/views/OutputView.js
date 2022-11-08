const Console = require('../utils/Console.js');

class OutputView {
  static message = {
    start: '숫자 야구 게임을 시작합니다.',
    end: '숫자 야구 게임을 종료합니다.',
  };

  static printStartingMessage() {
    Console.print(this.message.start);
  }

  static printEndingMessage() {
    Console.print(this.message.end);
  }

  static printScoreMessage(message) {
    Console.print(message);
  }
}

module.exports = OutputView;
