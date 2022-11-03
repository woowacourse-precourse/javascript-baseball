const { GAME_MESSAGE, GAME_RULE } = require('../utils/constant');
const { getRandomNumbers, getStrike, getBall } = require('../utils/core');
const { triggerConsole, closeConsole } = require('../utils/missionUtils');
const { isValidateNumber, isValidateNumbers } = require('../utils/validator');

class BaseballGameController {
  constructor(baseballGameModel, baseballGameView) {
    this.baseballGameModel = baseballGameModel;
    this.baseballGameView = baseballGameView;
  }

  startGame() {
    this.baseballGameView.print(GAME_MESSAGE.START);
    this.baseballGameModel.setComputerValue(getRandomNumbers());
    this.triggerGame();
  }

  triggerGame() {
    triggerConsole(GAME_MESSAGE.INPUT_NUMBERS, (number) => {
      if (isValidateNumbers(number)) {
        this.baseballGameModel.setUserValue(number);
        this.resultGame();
      }
    });
  }

  resultGame() {
    const strike = getStrike(
      this.baseballGameModel.computerValue,
      this.baseballGameModel.userValue,
    );
    const ball = getBall(this.baseballGameModel.computerValue, this.baseballGameModel.userValue);
    if (strike !== `${GAME_RULE.STRIKE}${GAME_MESSAGE.STRIKE}`) {
      this.baseballGameView.printResultGame(strike, ball);
      this.triggerGame();
    } else if (strike === `${GAME_RULE.STRIKE}${GAME_MESSAGE.STRIKE}`) {
      this.baseballGameView.print(GAME_MESSAGE.SUCCESS);
      this.successGame();
    }
  }

  successGame() {
    triggerConsole(GAME_MESSAGE.INPUT_NUMBER, (number) => {
      if (isValidateNumber(number)) {
        if (number === GAME_RULE.RESTART_NUMBER) {
          this.restartGame();
        } else if (number === GAME_RULE.FINISH_NUMBER) {
          closeConsole();
        }
      }
    });
  }

  restartGame() {
    this.baseballGameModel.setComputerValue(getRandomNumbers());
    this.triggerGame();
  }
}

module.exports = BaseballGameController;
