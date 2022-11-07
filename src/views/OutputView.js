import Console from '../utils/Console.js';

class OutputView {
  static message = {
    start: '숫자 야구 게임을 시작합니다.',
    end: '숫자 야구 게임을 종료합니다.',
    endGame: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  };

  static printStartingMessage() {
    Console.print(this.message.start);
  }

  static printEndingMessage() {
    Console.print(this.message.end);
  }

  static printThreeStrikeMessage() {
    Console.print(this.message.endGame);
  }

  static printScoreMessage(message) {
    Console.print(message);
  }
}

export default OutputView;
