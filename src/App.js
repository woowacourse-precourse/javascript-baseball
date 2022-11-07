const Computer = require("./component/Computer");
const Play = require("./component/Play");
const User = require("./component/User");
const { MESSAGE, NUMBER_COUNT } = require("./constant/message.constant");
const { Console } = require("@woowacourse/mission-utils");
class App {
  constructor() {
    this.computer = new Computer();
    this.user = new User();
    this.game = new Play();
  }
  play() {
    Console.print(MESSAGE.START);
    this.start();
  }

  start() {
    const computerNum = this.computerNum.makeNumbers();
    this.match(computerNum);
  }

  match(computerNum) {
    Console.readLine(MESSAGE.INPUT, (userInput) => {
      const isUserInput = this.user.checkInput(userInput);

      if (isUserInput === false) {
        return this.throwError();
      }

      const { countBall, countStrike } = this.game.printMessage(
        computerNum,
        userInput
      );
      this.game.printMessage(countBall, countStrike);

      if (countStrike !== NUMBER_COUNT) {
        return this.match(computerNum);
      }

      this.checkToRestart();
    });
  }

  checkToRestart() {
    Console.print(MESSAGE.SUCCESS);

    Console.readLine(MESSAGE.END, (userInput) => {
      if (userInput === 1) {
        return this.restart();
      }

      if (userInput === 2) {
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

module.exports = App;
