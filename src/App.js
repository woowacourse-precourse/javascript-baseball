const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("./Game");
const Computer = require("./Computer");

class App {
  constructor() {
    this.computer = new Computer();
  }

  start() {
    const computerNumber = this.computer.makeRandomNumber();
  }

  restart() {}

  exit() {}

  playBall() {
    MissionUtils.Console.print(Game.MESSAGE.START);
    this.start();
  }
}

const numberbaseball = new App();
numberbaseball.playBall();

module.exports = App;
