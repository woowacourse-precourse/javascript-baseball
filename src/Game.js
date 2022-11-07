const MissionUtils = require("@woowacourse/mission-utils");
const User = require("./User");
const Computer = require("./Computer");
const { MESSAGE } = require("./lib/constants");

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
      console.log(answer);
    });
  }

  printIntro() {
    this.printMessage(MESSAGE.INTRO);
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = Game;
