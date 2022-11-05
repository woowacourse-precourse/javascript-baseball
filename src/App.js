const { Console } = require('@woowacourse/mission-utils');
const User = require('./lib/User');
const Computer = require('./lib/Computer');
const Game = require('./lib/Game');
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
        this.throwError();
        return;
      }

      const { ballCount, strikeCount } = this.game.getGameResult(computerNum, userInput);
      this.game.renderGameMessage(ballCount, strikeCount);

      if (strikeCount !== NUMBER_LIMIT) {
        this.match(computerNum);
        return;
      }

      Console.print(MESSAGE.SUCCESS);
      this.askUserToRestart();
    });
  }

  askUserToRestart() {
    Console.readLine(MESSAGE.END, userInput => {
      if (userInput === OPTION.RESTART) {
        this.restart();
        return;
      }

      if (userInput === OPTION.EXIT) {
        this.exit();
        return;
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
