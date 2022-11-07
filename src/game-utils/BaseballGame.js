const { Console } = require("@woowacourse/mission-utils");
const ComputerNumbers = require("./ComputerNumbers");
const ValidUserNumbers = require("./ValidUserNumbers");
const { GAME_VALUE, GAME_MESSAGE, ERROR_MESSAGE } = require("../constants/constants");

class BaseballGame {
  constructor() {
    this.validUserNumbers = new ValidUserNumbers();
  }

  printResult(strikeCount, ballCount) {
    if (strikeCount === 0 && ballCount === 0) {
      return Console.print("낫싱");
    }
    const strikeCountComment = (strikeCount > 0) ? `${strikeCount}스트라이크` : '';
    (ballCount === 0) ? Console.print(`${strikeCountComment}`) :
      Console.print(`${ballCount}볼 ${strikeCountComment}`);
  };

  start() {
    Console.print(GAME_MESSAGE.GAME_START);

    return this.playGame();
  }

  playGame() {
    this.computerNumbers = ComputerNumbers.randomSelectComputerNumbers();

    return this.inputUserNumbers(this.computerNumbers);
  }

  inputUserNumbers(computerNumbers) {
    Console.readLine(GAME_MESSAGE.GAME_INPUT_NUMBERS, userInput => {
      const validUserInput = this.validUserNumbers.isValidUserInput(userInput);
      if (validUserInput === false) {
        this.throwError(ERROR_MESSAGE.ERROR_USERINPUT_NOT_VALID);
      }
      this.progressTurn(userInput, computerNumbers);
    });
  }

  progressTurn(userInput, computerNumbers) {
    const { strikeCount, ballCount } =
      this.getStrikeAndBallCount(userInput, computerNumbers);
    this.printResult(strikeCount, ballCount);
    (strikeCount === 3) ? this.restartOrEndGame() : this.inputUserNumbers(computerNumbers);
  }

  getStrikeAndBallCount(userInput, computerNumbers) {
    const computerNumbersArray = [...computerNumbers];
    const userInputArray = [...userInput];
    let strikeCount = 0;
    let ballCount = 0;
    userInputArray.map((number, index) => {
      (number === computerNumbersArray[index]) ? strikeCount++ :
        (computerNumbersArray.includes(number)) ? ballCount++ : 0;
    });
    return { strikeCount, ballCount };
  }

  restartOrEndGame() {
    this.restart = true;
    Console.print(GAME_MESSAGE.GAME_CLEAR);
    Console.readLine(GAME_MESSAGE.GAME_RESTART, (number) => {
      (number !== GAME_VALUE.RESTART && number !== GAME_VALUE.END) ?
        this.throwError(ERROR_MESSAGE.ERROR_USERINPUT_RESTART) :
        (number === GAME_VALUE.RESTART) ? this.playGame() : this.exitConsole();
    });
  }

  exitConsole() {
    Console.close();
  }

  throwError(messages) {
    throw new Error(messages);
  }
}

module.exports = BaseballGame;
