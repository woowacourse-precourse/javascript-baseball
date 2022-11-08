const { Console } = require("@woowacourse/mission-utils");
const generateRandomNumber = require("./computerNumber.js");
const { RESULT, GAME_MESSAGE, GAME_ERROR_MESSAGE } = require("./constants.js");
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
      if (message === GAME_MESSAGE.RESTART)
        return this.choiceReplayOrClose(userInput);
      this.userInputHandling(userInput);
      this.readUserInput(GAME_MESSAGE.INPUT);
    });
  }

  userInputHandling(userInput) {
    console.log(this.computerNumber)
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
    if (!strike && !ball) return print(RESULT.NOTHING);

    return print(
      `${ball ? ball + RESULT.BALL : RESULT.BLANK}${
        strike ? strike + RESULT.STRIKE : RESULT.BLANK
      }`
    );
  }

  readUserInputOneOrTwo() {
    print(GAME_MESSAGE.ANSWER);
    this.readUserInput(GAME_MESSAGE.RESTART);
  }

  choiceReplayOrClose(userInput) {
    if (userInput === "1") return this.play();
    if (userInput === "2") return Console.close();
    else throw new Error(GAME_ERROR_MESSAGE.WRONG_INPUT);
  }
}
module.exports = BaseballGame;
