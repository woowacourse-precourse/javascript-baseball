const Computer = require('./Computer');
const Console = require('./Console');
const Player = require('./Player');
const { getBallAndStrikeMessage, countBallAndStrike } = require('./utils/baseball');
const {
  QUESTION, MESSAGE, NUMBERS_RULES, START_RULES, EXCEPTION,
} = require('./static/constants');
const Exception = require('./Exception');

class BaseballGame {
  constructor(console = new Console()) {
    this.computer = new Computer();
    this.player = new Player();
    this.console = console;
  }

  start(answer = START_RULES.start) {
    BaseballGame.validateStartRules(answer);
    if (answer === START_RULES.exit) {
      this.exit();
    }
    if (answer === START_RULES.start) {
      this.computer.setRandomNumbers();
      this.inputPlayerNumbers();
    }
  }

  inputPlayerNumbers() {
    this.console.readLine(QUESTION.inputNumber, this.answerPlayerNumbers.bind(this));
  }

  answerPlayerNumbers(answer) {
    this.player.setNumbers(answer);
    const computerNumbers = this.computer.getNumbers();
    const playerNumbers = this.player.getNumbers();
    const { ball, strike } = countBallAndStrike({ computerNumbers, playerNumbers });
    const message = getBallAndStrikeMessage({ ball, strike });

    this.console.print(message);

    if (BaseballGame.isGameOver(strike)) {
      this.gameOver();
      return;
    }

    this.inputPlayerNumbers();
  }

  gameOver() {
    this.console.print(MESSAGE.gameOver);
    this.inputRestartOrExit();
  }

  inputRestartOrExit() {
    this.console.readLine(QUESTION.restart, this.start.bind(this));
  }

  exit() {
    this.console.close();
  }

  static validateStartRules(value) {
    if (!BaseballGame.isIncludeInStartRules(value)) {
      throw new Exception(EXCEPTION.invalidInput);
    }
  }

  static isIncludeInStartRules(value) {
    return Object.values(START_RULES).includes(value);
  }

  static isGameOver(strike) {
    return strike === NUMBERS_RULES.digit;
  }
}

module.exports = BaseballGame;
