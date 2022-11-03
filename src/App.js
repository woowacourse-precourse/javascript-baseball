const { Console } = require('@woowacourse/mission-utils');

const {
  GAME_MENU_RESTART,
  GAME_MENU_EXIT,
  RANDOM_NUMBER_COUNT,
} = require('./lib/constants/game');
const {
  DUPLICATE_CHARACTER_REGEX,
  GAME_MENU_CODE_REGEX,
  THREE_DIGIT_NUMBER_REGEX,
} = require('./lib/constants/validation');

const NumberBaseballGameManager = require('../src/NumberBaseballGameManager');

class App {
  gameManager;

  constructor() {
    this.gameManager = new NumberBaseballGameManager();
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    try {
      this.inputAnswer();
    } catch (err) {
      this.exitGame();
      throw err;
    }
  }

  inputAnswer() {
    Console.readLine('숫자를 입력해주세요 : ', answer => {
      try {
        this.checkUserInput(answer);
        this.printHint(answer);

        if (this.gameManager.isGameOver) {
          this.gameOver();
          return;
        }

        this.inputAnswer();
      } catch (err) {
        throw err;
      }
    });
  }

  checkUserInput(inputValue) {
    if (this.isInvalidInput(inputValue)) {
      throw new Error('잘못된 입력입니다.');
    }
  }

  isInvalidInput(inputValue) {
    return (
      this.isNotThreeDigitNumber(inputValue) ||
      this.hasDuplicateNumber(inputValue)
    );
  }

  isNotThreeDigitNumber(inputValue) {
    return !THREE_DIGIT_NUMBER_REGEX.test(inputValue);
  }

  hasDuplicateNumber(inputValue) {
    return DUPLICATE_CHARACTER_REGEX.test(inputValue);
  }

  printHint(answer) {
    Console.print(this.gameManager.getHint(answer));
  }

  gameOver() {
    Console.print(
      `${RANDOM_NUMBER_COUNT}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
    );
    this.inputGameMenuCode();
  }

  inputGameMenuCode() {
    Console.readLine(
      `게임을 새로 시작하려면 ${GAME_MENU_RESTART}, 종료하려면 ${GAME_MENU_EXIT}를 입력하세요.\n`,
      code => {
        try {
          this.checkGameMenuCode(code);
          const gameMenuCode = parseInt(code, 10);

          if (gameMenuCode === GAME_MENU_EXIT) {
            this.exitGame();
            return;
          }

          this.restartGame();
        } catch (err) {
          throw err;
        }
      },
    );
  }

  checkGameMenuCode(code) {
    if (!GAME_MENU_CODE_REGEX.test(code)) {
      throw new Error('잘못된 입력입니다.');
    }
  }

  exitGame() {
    Console.print('게임을 종료합니다.');
    Console.close();
  }

  restartGame() {
    this.gameManager.reset();
    this.inputAnswer();
  }
}

module.exports = App;
