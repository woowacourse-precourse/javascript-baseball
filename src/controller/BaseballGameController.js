const { GAME_MESSAGE, GAME_RULE } = require('../utils/constant');
const { getRandomNumbers } = require('../utils/core');
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
    const strike = this.getStrike();
    const ball = this.getBall();
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

  getStrike() {
    let strike = 0;
    for (let index = 0; index < GAME_RULE.NUMBERS_LENGTH; index += 1) {
      if (this.baseballGameModel.userValue[index] === this.baseballGameModel.computerValue[index]) {
        strike += 1;
      }
    }
    return strike ? `${strike}${GAME_MESSAGE.STRIKE}` : '';
  }

  getBall() {
    const strike = this.getStrike();
    let ball = 0;
    for (let index = 0; index < GAME_RULE.NUMBERS_LENGTH; index += 1) {
      if (this.baseballGameModel.computerValue.includes(this.baseballGameModel.userValue[index])) {
        ball += 1;
      }
    }
    if (strike) {
      ball -= Number(strike.slice(0, 1));
    }
    return ball ? `${ball}${GAME_MESSAGE.BALL}` : '';
  }
}

module.exports = BaseballGameController;
