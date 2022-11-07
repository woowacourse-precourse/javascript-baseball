const { Console } = require('@woowacourse/mission-utils');

const { COMMAND, MESSAGES } = require('./lib/constants');
const Computer = require('./Computer');

class App {
  play() {
    App.printGameStart();
    this.initGame();
  }

  static printGameStart() {
    Console.print(MESSAGES.START_GAME);
  }

  initGame() {
    this.computer = new Computer();
    this.run();
  }

  run() {
    Console.readLine(MESSAGES.ENTER_INPUT, input => {
      const { numberOfStrike, hintString } = this.computer.processInput(input);
      Console.print(hintString);

      if (numberOfStrike !== 3) {
        this.run();
      } else {
        App.printPlayerWinGame();
        this.askRestartOrQuit();
      }
    });
  }

  static printPlayerWinGame() {
    Console.print(MESSAGES.WIN_GAME);
  }

  askRestartOrQuit() {
    Console.readLine(MESSAGES.ENTER_COMMAND, input => {
      const command = Number(input.trim());
      this.handleCommand(command);
    });
  }

  handleCommand(command) {
    if (command === COMMAND.RESTART) {
      this.initGame();
    } else if (command === COMMAND.QUIT) {
      App.quit();
    } else {
      throw new Error(MESSAGES.ERROR);
    }
  }

  static quit() {
    Console.close();
  }
}

module.exports = App;
