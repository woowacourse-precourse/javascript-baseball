const { Console } = require('@woowacourse/mission-utils');
const GameManager = require('./GameManager');
const Printer = require('./Printer');

const MODE_NUMBER = {
  RESTART: 1,
  END: 2,
};

class App {
  constructor() {
    this.gameManager = new GameManager();
    this.printer = new Printer();
  }

  play() {
    this.printer.showStartMessage();
    this.guess();
  }

  guess() {
    Console.readLine(this.printer.getInputMessage(), (userInput) => {
      if (this.isError(userInput)) {
        this.printer.throwError();
      }

      const { ballCount, strikeCount } = this.gameManager.compare(
        userInput.split('')
      );
      this.printer.showResult(ballCount, strikeCount);

      if (strikeCount === 3) {
        this.printer.showSuccess();
        this.end();
        return;
      }

      this.guess();
    });
  }

  end() {
    Console.readLine(this.printer.getEndMessage(), (mode) => {
      if (Number(mode) === MODE_NUMBER.RESTART) {
        this.restart();
        return;
      }

      if (Number(mode) === MODE_NUMBER.END) {
        this.exit();
        return;
      }

      this.printer.throwError();
    });
  }

  restart() {
    this.gameManager = new GameManager();
    this.guess();
  }

  exit() {
    Console.close();
  }

  isError(userInput) {
    if (userInput.length !== 3) {
      return true;
    }

    if (new Set(userInput.split('')).size !== 3) {
      return true;
    }

    const VALIDATION_REGEX = /[^1-9]/g;
    if (VALIDATION_REGEX.test(userInput)) {
      return true;
    }

    return false;
  }
}

const app = new App();
app.play();

module.exports = App;
