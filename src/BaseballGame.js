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
    this.console.readLine(QUESTION.inputNumber, this.answerPlayerNumbers.bind(this));
  }

  answerPlayerNumbers(answer) {
    this.player.setNumbers(answer);

    this.inputPlayerNumbers();
  }

  static countBallAndStrike({ computerNumbers, playerNumbers }) {
    const result = { ball: 0, strike: 0 };

    playerNumbers.forEach((playerNumber, index) => {
      if (playerNumber === computerNumbers[index]) {
        result.strike += 1;
        return;
      }
      if (computerNumbers.includes(playerNumber)) {
        result.ball += 1;
      }
    });

    return result;
  }
}

module.exports = BaseballGame;
