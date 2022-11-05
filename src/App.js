const { Console } = require('@woowacourse/mission-utils');
const CheckValid = require('./lib/CheckValid');
const Computer = require('./lib/Computer');
const Game = require('./lib/Game');
const { NUMBER_LIMIT, MESSAGE, OPTION } = require('./constant/baseball');

class App {
  constructor() {
    this.computer = new Computer();
    this.checkValid = new CheckValid();
    this.game = new Game();
  }

  play() {
    this.start();
  }

  start() {
    Console.print(MESSAGE.START);

    const computerNum = this.computer.makeNumbers();
    this.match(computerNum);
  }

  match(computerNum) {
    Console.readLine(MESSAGE.INPUT, userInput => {
      const isUserInputValid = this.checkValid.validateInput(userInput);

      if (isUserInputValid === false) {
        throw new Error(MESSAGE.ERROR);
      }

      const { ballCount, strikeCount } = this.game.getGameResult(computerNum, userInput);
      this.game.renderGameMessage(ballCount, strikeCount);

      if (strikeCount !== NUMBER_LIMIT) return this.play(computerNum);

      Console.print(MESSAGE.SUCCESS);
      return this.askUserToRestart();
    });
  }

  // TODO: 유저 옵션 입력값 유효성 검사 로직 분리
  askUserToRestart() {
    Console.readLine(MESSAGE.END, userInput => {
      if (userInput === OPTION.RESTART) return this.restart();
      if (userInput === OPTION.EXIT) return this.exit();

      throw new Error(MESSAGE.ERROR);
    });
  }

  restart() {
    this.start();
  }

  exit() {
    Console.print(MESSAGE.EXIT);
    Console.close();
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;
