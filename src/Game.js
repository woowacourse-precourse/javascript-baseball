const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const User = require('./User');
const { MESSAGE, REPLAY } = require('./lib/constants');

class Game {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
    this.set();
  }

  set() {
    this.computer.setUpNumber();
  }

  play() {
    this.printStartMessage();
    this.start();
  }

  start() {
    this.user.readAnswer(MESSAGE.USER_ANSWER, (answer) => {
      const correct = this.checkAnswer(answer);

      if (correct) {
        this.checkReplay();
      }
      if (!correct) {
        this.start();
      }
    });
  }

  replay() {
    this.set();
    this.play();
  }

  exit() {
    this.printMessage(MESSAGE.CLOSE);
    MissionUtils.Console.close();
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

  checkReplay() {
    this.user.wantRestart(MESSAGE.RESTART, (answer) => {
      if (answer === REPLAY.RESTART) this.replay();
      if (answer === REPLAY.EXIT) this.exit();
    });
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
    }
    if (ball > 0 && strike === 0) {
      this.printMessage(MESSAGE.BALL[ball]);
    }
    if (ball === 0 && strike === 0) {
      this.printMessage(MESSAGE.NOTHING);
    }
    if (ball !== 0 && strike !== 0) {
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
