const { Console } = require('@woowacourse/mission-utils');

const { COMMAND, MESSAGES } = require('./lib/constants');
const Computer = require('./Computer');

class App {
  play() {
    Console.print(MESSAGES.START_GAME);
    this.initGame();
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
        Console.print(MESSAGES.WIN_GAME);
        this.askRestartOrQuit();
      }
    });
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
      Console.close();
    } else {
      throw new Error(MESSAGES.ERROR);
    }
  }
}

module.exports = App;
