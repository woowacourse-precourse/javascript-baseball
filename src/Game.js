const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const User = require('./User');
const { MESSAGE, REPLAY } = require('./lib/constants');

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

  replay(){
    this.set();
    this.play();
  }

  exit() {
    MissionUtils.Console.close();
  }

  start() {
    this.printStartMessage();
    this.user.readAnswer(MESSAGE.READ_ANSWER, (answer) => {
      const correct = this.checkAnswer(answer);

      correct ? this.checkReplay() : this.start();
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

  checkReplay() {
    this.user.readFlag(MESSAGE.RESTART, (flag) => {
      if (flag === REPLAY.RESTART) this.replay();
      if (flag === REPLAY.EXIT) this.exit();
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
