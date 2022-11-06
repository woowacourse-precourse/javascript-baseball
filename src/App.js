const { Console } = require('@woowacourse/mission-utils');
const User = require('./components/User');
const Computer = require('./components/Computer');
const Game = require('./components/Game');
const { NUMBER_LIMIT, MESSAGE, OPTION } = require('./constant/baseball');

class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.game = new Game();
  }

  play() {
    Console.print(MESSAGE.START);
    this.start();
  }

  start() {
    const computerNum = this.computer.makeNumbers();
    this.match(computerNum);
  }

  match(computerNum) {
    Console.readLine(MESSAGE.INPUT, userInput => {
      const isUserInputValid = this.user.validateInput(userInput);

      if (isUserInputValid === false) {
        return this.throwError();
      }

      const { ballCount, strikeCount } = this.game.getGameResult(computerNum, userInput);
      this.game.renderGameMessage(ballCount, strikeCount);

      if (strikeCount !== NUMBER_LIMIT) {
        return this.match(computerNum);
      }

      this.askUserToRestart();
    });
  }

  askUserToRestart() {
    Console.print(MESSAGE.SUCCESS);

    Console.readLine(MESSAGE.END, userInput => {
      if (userInput === OPTION.RESTART) {
        return this.restart();
      }

      if (userInput === OPTION.EXIT) {
        return this.exit();
      }

      this.throwError();
    });
  }

  restart() {
    this.start();
  }

  exit() {
    Console.close();
  }

  throwError() {
    throw new Error(MESSAGE.ERROR);
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
