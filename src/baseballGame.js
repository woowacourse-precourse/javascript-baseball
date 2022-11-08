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
    this.readUserInput(GAME_MESSAGE.INPUT);
  }

  readUserInput(message) {
    Console.readLine(message, (userInput) => {
      this.userInputHandling(userInput);
      this.readUserInput(GAME_MESSAGE.INPUT);
    });
  }

  userInputHandling(userInput) {
    this.userInput = userInput;
    checkUserInput(this.userInput);
    this.printGameResult();
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

  printGameResult() {
    const strike = this.countStrikeNumbers();
    const ball = this.countBallNumbers();

    if (strike === 3) return this.readUserInputOneOrTwo();
    if (!strike && !ball) return print(RESULT.낫싱);

    return print(
      `${ball ? ball + RESULT.볼 : RESULT.공백}${
        strike ? strike + RESULT.스트라이크 : RESULT.공백
      }`
    );
  }

  readUserInputOneOrTwo() {
    print(GAME_MESSAGE.ANSWER);
    this.readUserInput(GAME_MESSAGE.RESTART);
  }
}
module.exports = BaseballGame;
