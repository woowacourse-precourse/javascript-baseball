const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const User = require('./User');
const { MESSAGE } = require('./lib/constants');

class Game {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
    this.setUpNumber();
  }

  set() {
    this.computer.setUpNumber();
  }

  play() {
    this.start();
  }

  start() {
    this.printStartMessage();
    this.user.readAnswer(MESSAGE.READ_ANSWER, (answer) => {
      const correct = this.checkAnswer(answer);

      if (!correct) this.start();
      else
      this.user.wantRestart(MESSAGE.RESTART, (answer) => {
        console.log(answer);
      });
    });
  }

  checkAnswer(answer) {
    const [ball, strike] = this.computer.calculateCount(answer);

    this.printResult(ball, strike);

    if (strike === 3) {
      this.printEndMessage();
      return true;
    }

    return false;
  }

  printStartMessage() {
    this.printMessage(MESSAGE.START);
  }

  printEndMessage() {
    this.printMessage(MESSAGE.END);
  }

  printResult(ball, strike) {
    if (ball === 0 && strike > 0) {
      this.printMessage(MESSAGE.STRIKE[strike]);
    } else {
      this.printMessage(
        `${MESSAGE.BALL[ball]} ${MESSAGE.STRIKE[strike]}`.trim()
      );
    }
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }
}
module.exports = Game;
