const Computer = require('./Computer');
const Console = require('./Console');

class BaseballGame {
  constructor(console = new Console()) {
    this.computer = new Computer();
    this.console = console;
  }

  start() {
    this.computer.setRandomNumbers();
  }
}

module.exports = BaseballGame;
