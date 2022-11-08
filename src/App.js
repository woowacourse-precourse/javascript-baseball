const MissionUtils = require('@woowacourse/mission-utils');
const checkValidUserInput = require('./utils/checkValidUserInput');
const generateRandomNumber = require('./game/generateRandomNumber');
const calculateScore = require('./game/calculateScore');
const getCompareResultText = require('./game/getCompareResultText');
const {
  GAME_PROGRESS_TEXT, GAME_RESULT_TEXT,
  THREE_STRIKE_COUNT, RESTART_USER_INPUT,
} = require('./constant/gameRule');
const { ERROR_TEXT } = require('./constant/error');

class App {
  startGame() {
    this.initGame();
    this.computerRandomNumber = generateRandomNumber();
    this.getUserInput();
  }

  initGame() {
    this.userInputNumber = [];
    this.computerRandomNumber = [];
    this.strike = 0;
    this.ball = 0;
    this.compareResultText = '';
  }

  getUserInput() {
    MissionUtils.Console.readLine(GAME_PROGRESS_TEXT.REQUEST_INPUT, (userInput) => {
      this.userInputNumber = [...String(userInput).split('').map((x) => +x)];
      checkValidUserInput(this.userInputNumber);
      this.calculateResult();
    });
  }

  calculateResult() {
    [this.strike, this.ball] = calculateScore(this.userInputNumber, this.computerRandomNumber);
    this.compareResultText = getCompareResultText(this.strike, this.ball);
    MissionUtils.Console.print(this.compareResultText);
    this.checkThreeStrike();
  }

  checkThreeStrike() {
    if (this.strike !== THREE_STRIKE_COUNT) {
      this.getUserInput();
    }
    if (this.strike === THREE_STRIKE_COUNT) {
      this.askRestart();
    }
  }

  askRestart() {
    MissionUtils.Console.print(GAME_RESULT_TEXT.THREE_STRIKE);
    MissionUtils.Console.print(GAME_PROGRESS_TEXT.RESTART_QUESTION);
    MissionUtils.Console.readLine('', (userInput) => {
      if (userInput === RESTART_USER_INPUT.RESTART_INPUT) {
        this.startGame();
        return;
      }
      if (userInput === RESTART_USER_INPUT.STOP_INPUT) {
        MissionUtils.Console.close();
        return;
      }
      throw new Error(ERROR_TEXT.INCORRECT_INPUT);
    });
  }

  play() {
    MissionUtils.Console.print(GAME_PROGRESS_TEXT.START_TEXT);
    this.startGame();
  }
}

module.exports = App;
