const { Console } = require("@woowacourse/mission-utils");
const { GAME_STATE_MESSAGE, RANDOM_NUMBER } = require("../constant/constant");
const Computer = require("./Computer");
const RandomNumber = require("./RandomNumber");

class BaseBallGame {
  #strikeCount;
  #ballCount;

  constructor() {
    this.computer = null;
    this.#strikeCount = 0;
    this.#ballCount = 0;
  }

  getNewComputerNumber() {
    const newComputerNumber = new Computer(new RandomNumber());
    this.computer = newComputerNumber.numbers;
  }

  #clearBallAndStrikeCount() {
    this.#strikeCount = 0;
    this.#ballCount = 0;
  }

  #inputNumber() {
    this.#clearBallAndStrikeCount();

    Console.readLine(GAME_STATE_MESSAGE.INPUT, (input) => {
      this.getResult(input, this.computer);
    });
  }
}
