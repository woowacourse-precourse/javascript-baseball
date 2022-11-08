const { Console } = require('@woowacourse/mission-utils');
const GameManager = require('./GameManager');
const Printer = require('./Printer');
const Validator = require('./Validator');

const MODE_NUMBER = {
  RESTART: 1,
  END: 2,
};

class App {
  constructor() {
    this.gameManager = new GameManager();
    this.printer = new Printer();
    this.validator = new Validator();
  }

  play() {
    this.printer.showStartMessage();
    this.guess();
  }

  guess() {
    Console.readLine(this.printer.getInputMessage(), (userInput) => {
      if (this.validator.isError(userInput)) {
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
}

const app = new App();
app.play();

module.exports = App;
