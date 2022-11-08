const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Computer = require("./Computer");
const { MESSAGE, FLAG } = require("./lib/constants");

class Game {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
    this.setUp();
  }

  setUp() {
    this.computer.setUp();
  }

  play() {
    this.start();
  }

  start() {
    this.printIntro();

    this.user.readAnswer(MESSAGE.READ_ANSWER, (answer) => {
      const correct = this.checkAnswer(answer);

      correct ? this.checkReplay() : this.start();
    });
  }

  replay() {
    this.setUp();
    this.play();
  }

  exit() {
    MissionUtils.Console.close();
  }

  checkAnswer(answer) {
    const [ball, strike] = this.computer.calcCount(answer);

    this.printResult(ball, strike);

    if (strike === 3) {
      this.printOutro();
      return true;
    }

    return false;
  }

  checkReplay() {
    this.user.readFlag(MESSAGE.REPLAY, (flag) => {
      if (flag === FLAG.REPLAY) this.replay();
      if (flag === FLAG.EXIT) this.exit();
    });
  }

  printIntro() {
    this.printMessage(MESSAGE.INTRO);
  }

  printOutro() {
    this.printMessage(MESSAGE.OUTRO);
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
