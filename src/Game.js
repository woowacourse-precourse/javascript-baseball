const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('./Computer');
const User = require("./User");
const { MESSAGE } = require('./lib/constants');

class Game {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
    this.setUpNumber();
  }

  setting() {
    this.computer.setUpNumber();
  }

  play() {
    this.start();
  }
  start() {
    this.printStartMessage();
    this.user.readAnswer(MESSAGE.USER_ANSWER, (answer) => {
      console.log(answer);
    });
  }
  printStartMessage() {
    this.printMessage(MESSAGE.INTRO);
  }
  printMessage(message) {
    MissionUtils.Console.print(message);
  }
}
module.exports = Game;
