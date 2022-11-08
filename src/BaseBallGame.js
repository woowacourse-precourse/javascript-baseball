const { Console } = require("@woowacourse/mission-utils");
const { GAME_STATE_MESSAGE, RANDOM_NUMBER } = require("../utils/constant");
const Computer = require("./Computer");
const RandomNumber = require("./RandomNumber");
const Validator = require("./Validator");

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

  #restart() {
    this.#clearBallAndStrikeCount();
    this.getNewComputerNumber();
    this.#inputNumber();
  }

  isValidGameInput(plyaerInput) {
    const validator = new Validator();
    return validator.isGameNumberInput(plyaerInput);
  }

  getNewComputerNumber() {
    const newComputerNumber = new Computer(new RandomNumber());
    this.computer = newComputerNumber.numbers;
  }

  #clearBallAndStrikeCount() {
    this.#strikeCount = 0;
    this.#ballCount = 0;
  }

  checkBallAndStrike(plyaerInput, randomNumbers) {
    const numbers = plyaerInput.split("").map((v) => Number(v));

    for (let i = 0; i < randomNumbers.length; i++) {
      this.#countStrike(numbers[i], randomNumbers, i);
      this.#countBall(numbers[i], randomNumbers, i);
    }

    this.#viewMessage();

    this.#checkPlayerWin();
  }

  #isStrike(input, computer, index) {
    return input === computer[index];
  }

  #isBall(input, computer, index) {
    return !this.#isStrike(input, computer, index) && computer.includes(input);
  }

  #countStrike(input, computer, index) {
    if (this.#isStrike(input, computer, index)) this.#strikeCount += 1;
  }

  #countBall(input, computer, index) {
    if (this.#isBall(input, computer, index)) this.#ballCount += 1;
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

  #viewMessage() {
    Console.print(this.#selectMessage());
  }

  #selectMessage() {
    if (this.#strikeCount === 3) {
      return "3스트라이크";
    }

    if (this.#ballCount === 0 && this.#strikeCount > 0) {
      return `${this.#strikeCount}스트라이크`;
    }

    if (this.#strikeCount === 0 && this.#ballCount > 0) {
      return `${this.#ballCount}볼`;
    }

    if (this.#strikeCount > 0 && this.#ballCount > 0) {
      return `${this.#ballCount}볼 ${this.#strikeCount}스트라이크`;
    }

    return "낫싱";
  }

  #checkPlayerWin() {
    if (this.#strikeCount === 3) {
      Console.print(GAME_STATE_MESSAGE.WIN);
      this.#checkRestartOrEndGame();
    } else {
      this.#inputNumber();
    }
  }

  #isValidResetOrEndInput(input) {
    const validator = new Validator();
    return validator.isResetOrAndInput(input);
  }

  #checkRestartOrEndGame() {
    Console.print(GAME_STATE_MESSAGE.END);
    Console.readLine(GAME_STATE_MESSAGE.RESET_0R_END, (input) => {
      this.#isValidResetOrEndInput(input);
      if (input === "1") this.#restart();
      if (input === "2") Console.close();
    });
  }
}

module.exports = BaseBallGame;
