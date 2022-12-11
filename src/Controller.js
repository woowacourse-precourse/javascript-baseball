const { Console } = require('@woowacourse/mission-utils');
const outputView = require('./OutputView');
const inputView = require('./InputView');
const BaseballGame = require('./BaseballGame');
const InputValidator = require('../validators/InputValidator');
const NUMBER = require('../constants/gameSetting');
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
    outputView.printGameResultCount(
      this.ResultBaseballRule(this.#baseballGame.getRandomNumber(), answer),
    );
    this.InputAnswer();
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
    const random = randomNumber;
    const input = answer.split('').map(Number);

    let strikeCount = 0;
    let ballCount = 0;
    for (let idx = 0; idx < random?.length; idx++) {
      if (random.includes(input[idx]) && random[idx] === input[idx])
        strikeCount += 1;
      if (random.includes(input[idx]) && random[idx] !== input[idx])
        ballCount += 1;
    }

    const resultBaseball = (ballCount ? `${ballCount}${MESSAGE.GAME.BALL} ` : '')
        + (strikeCount ? `${strikeCount}${MESSAGE.GAME.STRIKE}` : '');
    return resultBaseball ? resultBaseball : MESSAGE.GAME.NOTHING;
  }
}

module.exports = Controller;
