const { Console } = require('@woowacourse/mission-utils');
const GameManager = require('./GameManager');
const Printer = require('./Printer');
const Validator = require('./Validator');

class App {
  constructor() {
    this.gameManager = new GameManager();
    this.printer = new Printer();
    this.validator = new Validator();
    this.console = Console;
    this.MODE_NUMBER = {
      RESTART: 1,
      END: 2,
    };
  }

  play() {
    this.printer.showStartMessage();
    this.guess();
  }

  guess() {
    this.console.readLine(this.printer.getInputMessage(), (userInput) => {
      if (this.validator.isError(userInput)) {
        this.printer.throwError();
      }

      const { ballCount, strikeCount } = this.gameManager.compare(
        userInput.split('')
      );
      this.printer.showResult(ballCount, strikeCount);

      if (strikeCount === 3) {
        this.printer.showSuccessMessage();
        this.end();
        return;
      }

      this.guess();
    });
  }

  end() {
    this.console.readLine(this.printer.getEndMessage(), (mode) => {
      if (Number(mode) === this.MODE_NUMBER.RESTART) {
        this.restart();
        return;
      }

      if (Number(mode) === this.MODE_NUMBER.END) {
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
    this.console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
