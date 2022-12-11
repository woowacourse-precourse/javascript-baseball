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

  StartGame () {
    this.#baseballGame.setRandomNumber();
    this.InputAnswer();
  }

  InputAnswer () {
    inputView.askAnswer(this.HandleInputAnswer.bind(this));
  }

  HandleInputAnswer (answer) {
    InputValidator.checkBaseballNumber(answer);
    if (this.CorrectNumber(this.#baseballGame.getRandomNumber(), answer)) {
      outputView.printCorrect();
      this.InputRestart();
      return;
    }
    this.IncorrectAnswer(answer);
    this.InputAnswer();
  }

  IncorrectAnswer (answer) {
    outputView.printGameResultCount(
      this.ResultBaseballRule(this.#baseballGame.getRandomNumber(), answer),
    );
  }

  InputRestart () {
    inputView.askRestart(this.CheckRestart.bind(this));
  }

  CheckRestart (input) {
    if (InputValidator.checkInputRestartExit(input)) {
      this.#baseballGame.setRandomNumber();
      this.InputAnswer();
      return;
    }
    outputView.printGameFinish();
    Console.close();
  }

  CorrectNumber(randomNumber, answer) {
    return randomNumber?.join('') === answer;
  }

  ResultBaseballRule (randomNumber, answer) {
    const input = answer.split('').map(Number);
    let strikeCount = 0;
    let ballCount = 0;
    for (let idx = 0; idx < randomNumber?.length; idx++) {
      if (randomNumber.includes(input[idx])) {
        randomNumber[idx] === input[idx] ? strikeCount += 1 : ballCount += 1;
      }
    }
    return this.GetResult(ballCount, strikeCount);
  }

  GetResult (ballCount, strikeCount) {
    if (ballCount || strikeCount) {
      return (ballCount ? `${ballCount}${MESSAGE.GAME.BALL} ` : '') + (strikeCount ? `${strikeCount}${MESSAGE.GAME.STRIKE}` : '');
    }
    return MESSAGE.GAME.NOTHING;
  }
}

module.exports = Controller;
