const { Console } = require("@woowacourse/mission-utils");
const { GAME_STATE_MESSAGE, RANDOM_NUMBER } = require("../constant/constant");
const Computer = require("./Computer");
const RandomNumber = require("./RandomNumber");

class BaseBallGame {
  constructor() {
    this.computer = null;
  }

  getNewComputerNumber() {
    const newComputerNumber = new Computer(new RandomNumber());
    this.computer = newComputerNumber.numbers;
  }
}
