const { Console } = require('@woowacourse/mission-utils');
const GameManager = require('./GameManager');

const HINT_WORD = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
};

const MODE_NUMBER = {
  RESTART: 1,
  END: 2,
};

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  CORRECT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  ERROR: '잘못된 값이 입력되었습니다. 게임을 종료합니다.',
  END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

class App {
  constructor() {
    this.gameManager = new GameManager();
  }

  play() {
    this.start();
    this.guess();
  }

  start() {
    Console.print(MESSAGE.START);
  }

  guess() {
    Console.readLine(MESSAGE.INPUT_NUMBER, (userInput) => {
      if (this.isError(userInput)) {
        throw new Error(MESSAGE.ERROR);
      }

      const { ballCount, strikeCount } = this.gameManager.compare(
        userInput.split('')
      );
      this.showResult(ballCount, strikeCount);

      if (strikeCount === 3) {
        this.success();
        this.end();
        return;
      }

      this.guess();
    });
  }

  showResult(ballCount, strikeCount) {
    if (!ballCount && !strikeCount) {
      Console.print(HINT_WORD.NOTHING);
      return;
    }

    if (!ballCount) {
      Console.print(`${strikeCount}${HINT_WORD.STRIKE}`);
      return;
    }

    if (!strikeCount) {
      Console.print(`${ballCount}${HINT_WORD.BALL}`);
      return;
    }

    Console.print(
      `${ballCount}${HINT_WORD.BALL} ${strikeCount}${HINT_WORD.STRIKE}`
    );
  }

  success() {
    Console.print(MESSAGE.CORRECT);
  }

  end() {
    Console.readLine(`${MESSAGE.END}\n`, (mode) => {
      if (Number(mode) === MODE_NUMBER.RESTART) {
        this.restart();
        return;
      }

      if (Number(mode) === MODE_NUMBER.END) {
        this.exit();
        return;
      }

      throw new Error(MESSAGE.ERROR);
    });
  }

  restart() {
    this.gameManager = new GameManager();
    this.guess();
  }

  exit() {
    Console.close();
  }

  isError(userInput) {
    if (userInput.length !== 3) {
      return true;
    }

    if (new Set(userInput.split('')).size !== 3) {
      return true;
    }

    const VALIDATION_REGEX = /[^1-9]/g;
    if (VALIDATION_REGEX.test(userInput)) {
      return true;
    }

    return false;
  }
}

const app = new App();
app.play();

module.exports = App;
