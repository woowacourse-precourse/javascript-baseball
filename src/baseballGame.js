const { Console } = require("@woowacourse/mission-utils");
const generateRandomNumber = require("./computerNumber.js");
const { RESULT, GAME_MESSAGE } = require("./constants.js");
const { printGameStartMessage, print } = require("./gameCommentPrint.js");
const checkUserInput = require("./userInputCheck.js");

class BaseballGame {
  constructor() {
    this.computerNumber = this.computerNumber;
    this.userInput = this.userInput;
  }

  play() {
    printGameStartMessage();
    this.computerNumber = generateRandomNumber();
    this.readUserInput();
  }

  readUserInput() {
    Console.readLine(GAME_MESSAGE.INPUT, (userInput) => {
      this.userInput = userInput;
      this.userInputHandling();
      this.readUserInput();
    });
  }

  userInputHandling() {
    checkUserInput(this.userInput);
    this.compareComputerAndUser();
  }

  compareComputerAndUser() {
    const strike = this.countStrikeNumbers();
    const ball = this.countBallNumbers();
    this.printGameResult(strike, ball);
  }

  countStrikeNumbers() {
    return this.computerNumber.filter(
      (number, index) => number == this.userInput[index]
    ).length;
  }

  countBallNumbers() {
    return this.computerNumber.filter(
      (number, index) =>
        this.userInput.includes(number) && number != this.userInput[index]
    ).length;
  }

  printGameResult(strike, ball) {
    if (strike === 3) return print(RESULT.정답);
    if (!strike && !ball) return print(RESULT.낫싱);

    return print(
      `${ball ? ball + RESULT.볼 : RESULT.공백}${
        strike ? strike + RESULT.스트라이크 : RESULT.공백
      }`
    );
  }
}
module.exports = BaseballGame;
