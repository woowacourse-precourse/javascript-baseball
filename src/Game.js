const MissionUtils = require("@woowacourse/mission-utils");
const Computer = require("./Computer");
const { MESSAGE } = require("./lib/constants");

class Game {
  constructor() {
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
  }

  printIntro() {
    this.printMessage(MESSAGE.INTRO);
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }
}

module.exports = Game;
