const { Console } = require('@woowacourse/mission-utils');
const outputView = require('./OutputView');
const inputView = require('./InputView');
const BaseballGame = require('./BaseballGame');
const InputValidator = require('../validators/InputValidator');
const NUMBER = require('../constants/gameSetting');
const MESSAGE = require('../constants/gameMessages');

class Controller {

    #baseballGame;

    constructor() {
        this.#baseballGame = new BaseballGame();
    }

    startGame() {
        this.#baseballGame.setRandomNumber();
        this.InputAnswer();
    }
  
    InputAnswer() {
      inputView.askAnswer(this.handleInputAnswer.bind(this));
    }
  
    handleInputAnswer (answer) {
        InputValidator.isRandomInputErrorCase(answer);
        if (this.isCorrectNumber(this.#baseballGame.getRandomNumber(), answer)) {
          outputView.printCorrect();
          this.InputRestart();
        } else {
          outputView.printGameResultCount(this.resultBaseballRule(this.#baseballGame.getRandomNumber(), answer));
          this.InputAnswer();
        }
      
    }
  
    InputRestart () {
      inputView.askRestart(this.checkRestart.bind(this));
    }
  
    checkRestart (input) {
        if (this.checkInputRestartExit(input)) {
          this.#baseballGame.setRandomNumber();
          this.InputAnswer();
        } else {
          outputView.printGameFinish();
          Console.close();
        }
    }
  
    isCorrectNumber (randomNumber, answer) {
      return randomNumber?.join('') === answer;
    }
  
    resultBaseballRule (randomNumber, answer) {
      const random = randomNumber;
      const input = answer.split('').map(Number);
  
      let strikeCount = 0;
      let ballCount = 0;
      for (let idx = 0; idx < random?.length; idx++) {
        if (random.includes(input[idx]) && random[idx] === input[idx]) strikeCount += 1;
        if (random.includes(input[idx]) && random[idx] !== input[idx]) ballCount += 1;
      }
  
      const resultBaseball = (ballCount ? `${ballCount}${MESSAGE.GAME.BALL} ` : '')
      + (strikeCount ? `${strikeCount}${MESSAGE.GAME.STRIKE}` : '');
      return resultBaseball ? resultBaseball : MESSAGE.GAME.NOTHING;
    }
  
    checkInputRestartExit (input) {
      if (input === NUMBER.RESTART) return true;
      if (input === NUMBER.EXIT) return false;
      throw new Error(MESSAGE.GAME.ERROR);
    }
}

module.exports = Controller;


