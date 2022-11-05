const Computer = require('./Computer');
const Console = require('./Console');
const Player = require('./Player');
const { QUESTION, MESSAGE, NUMBERS_RULES } = require('./static/constants');

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
    const computerNumbers = this.computer.getNumbers();
    const playerNumbers = this.player.getNumbers();
    const { ball, strike } = BaseballGame.countBallAndStrike({ computerNumbers, playerNumbers });
    const message = BaseballGame.getBallAndStrikeMessage({ ball, strike });

    this.console.print(message);

    if (BaseballGame.checkIsGameOver(strike)) {
      this.gameOver();
      return;
    }

    this.inputPlayerNumbers();
  }

  gameOver() {
    this.console.print(MESSAGE.gameOver);
  }

  static checkIsGameOver(strike) {
    return strike === NUMBERS_RULES.digit;
  }

  static getBallAndStrikeMessage({ ball, strike }) {
    if (ball > 0 && strike > 0) {
      return `${ball}${MESSAGE.resultBall} ${strike}${MESSAGE.resultStrike}`;
    }
    if (ball > 0) {
      return `${ball}${MESSAGE.resultBall}`;
    }
    if (strike > 0) {
      return `${strike}${MESSAGE.resultStrike}`;
    }
    return MESSAGE.resultNoting;
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
