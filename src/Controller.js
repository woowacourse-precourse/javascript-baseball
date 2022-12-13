const { Console } = require('@woowacourse/mission-utils');
const outputView = require('./OutputView');
const inputView = require('./InputView');
const BaseballGame = require('./BaseballGame');
const InputValidator = require('../validators/InputValidator');
const MESSAGE = require('../constants/gameMessages');

class Controller {
  #baseballGame;

  constructor () {
    this.#baseballGame = new BaseballGame();
  }

  startGame () {
    this.#baseballGame.setRandomNumber();
    this.inputAnswer();
  }

  inputAnswer () {
    inputView.askAnswer(this.handleInputAnswer.bind(this));
  }

  handleInputAnswer (answer) {
    InputValidator.checkBaseballNumber(answer);
    if (this.correctNumber(this.#baseballGame.getRandomNumber(), answer)) {
      outputView.printCorrect();
      this.inputRestart();
      return;
    }
    this.incorrectAnswer(answer);
    this.inputAnswer();
  }

  incorrectAnswer (answer) {
    outputView.printGameResultCount(
      this.resultBaseballRule(this.#baseballGame.getRandomNumber(), answer),
    );
  }

  inputRestart () {
    inputView.askRestart(this.checkRestart.bind(this));
  }

  checkRestart (input) {
    if (InputValidator.checkInputRestartExit(input)) {
      this.#baseballGame.setRandomNumber();
      this.inputAnswer();
      return;
    }
    outputView.printGameFinish();
    Console.close();
  }

  correctNumber(randomNumber, answer) {
    return randomNumber?.join('') === answer;
  }

  resultBaseballRule (randomNumber, answer) {
    const input = answer.split('').map(Number);
    let strikeCount = 0;
    let ballCount = 0;
    for (let idx = 0; idx < randomNumber?.length; idx += 1) {
      if (randomNumber.includes(input[idx])) {
        randomNumber[idx] === input[idx] ? strikeCount += 1 : ballCount += 1;
      }
    }
    return this.getResult(ballCount, strikeCount);
  }

  getResult (ballCount, strikeCount) {
    if (ballCount || strikeCount) {
      return (ballCount ? `${ballCount}${MESSAGE.GAME.BALL} ` : '') + (strikeCount ? `${strikeCount}${MESSAGE.GAME.STRIKE}` : '');
    }
    return MESSAGE.GAME.NOTHING;
  }
}

module.exports = Controller;
