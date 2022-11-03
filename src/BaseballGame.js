const Computer = require('./Computer');
const Console = require('./Console');
const Player = require('./Player');
const { QUESTION } = require('./static/constants');

class BaseballGame {
  constructor(console = new Console()) {
    this.computer = new Computer();
    this.player = new Player();
    this.console = console;
  }

  start() {
    this.computer.setRandomNumbers();
    this.inputPlayerNumbers();
  }

  inputPlayerNumbers() {
    this.console.readLine(QUESTION.inputNumber, this.player.setNumbers.bind(this));
  }
}

module.exports = BaseballGame;
