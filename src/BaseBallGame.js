const { Console } = require("@woowacourse/mission-utils");
const { GAME_STATE_MESSAGE, RANDOM_NUMBER } = require("../constant/constant");
const Computer = require("./Computer");
const RandomNumber = require("./RandomNumber");

class BaseBallGame {
  #strikeCount;
  #ballCount;

  constructor() {
    this.playerInputNumber = null;
    this.computer = null;
    this.#strikeCount = 0;
    this.#ballCount = 0;
  }

  start() {
    this.#clearBallAndStrikeCount();
    this.getNewComputerNumber();
    Console.print(GAME_STATE_MESSAGE.START);
    this.#inputNumber();
  }

  getNewComputerNumber() {
    const newComputerNumber = new Computer(new RandomNumber());
    this.computer = newComputerNumber.numbers;
  }

  #clearBallAndStrikeCount() {
    this.#strikeCount = 0;
    this.#ballCount = 0;
  }

  getResult(plyaerInput, randomNumbers) {
    this.playerInputNumber = plyaerInput;
    this.isValidGameInput(plyaerInput);

    return this.checkBallAndStrike(plyaerInput, randomNumbers);
  }

  #inputNumber() {
    this.#clearBallAndStrikeCount();

    Console.readLine(GAME_STATE_MESSAGE.INPUT, (input) => {
      this.getResult(input, this.computer);
    });
  }
}
