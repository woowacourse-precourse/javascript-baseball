const { Console } = require('@woowacourse/mission-utils');

class Printer {
  constructor() {
    this.console = Console;

    this.MESSAGE = {
      START: '숫자 야구 게임을 시작합니다.',
      INPUT_NUMBER: '숫자를 입력해주세요 : ',
      SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
      ERROR: '잘못된 값이 입력되었습니다. 게임을 종료합니다.',
      END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    };

    this.HINT_WORD = {
      BALL: '볼',
      STRIKE: '스트라이크',
      NOTHING: '낫싱',
    };
  }

  showStartMessage() {
    this.console.print(this.MESSAGE.START);
  }

  getInputMessage() {
    return this.MESSAGE.INPUT_NUMBER;
  }

  getEndMessage() {
    return `${this.MESSAGE.END}\n`;
  }

  showResult(ballCount, strikeCount) {
    if (!ballCount && !strikeCount) {
      this.console.print(this.HINT_WORD.NOTHING);
      return;
    }

    if (!ballCount) {
      this.console.print(`${strikeCount}${this.HINT_WORD.STRIKE}`);
      return;
    }

    if (!strikeCount) {
      this.console.print(`${ballCount}${this.HINT_WORD.BALL}`);
      return;
    }

    this.console.print(
      `${ballCount}${this.HINT_WORD.BALL} ${strikeCount}${this.HINT_WORD.STRIKE}`
    );
  }

  throwError() {
    throw new Error(this.MESSAGE.ERROR);
  }

  showSuccessMessage() {
    this.console.print(this.MESSAGE.SUCCESS);
  }
}

module.exports = Printer;
