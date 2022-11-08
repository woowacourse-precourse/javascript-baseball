const { Console } = require("@woowacourse/mission-utils");
const ComputerNumbers = require("./ComputerNumbers");
const ValidUserNumbers = require("./ValidUserInput");
const { GAME_MESSAGE, ERROR_MESSAGE } = require("../constants/constants");

class BaseballGame {
  constructor() {
    this.validUserNumbers = new ValidUserNumbers();
  }
  initGame() {
    Console.print(GAME_MESSAGE.START_MESSAGE);
    return this.playGame();
  }

  playGame() {
    this.computerNumbers = ComputerNumbers.randomSelectComputerNumbers();
    return this.playing(this.computerNumbers);
  }

  playing(computerNumbers) {
    Console.readLine(GAME_MESSAGE.ENTER_NUMBER, (userInput) => {
      const validUserInput = this.validUserNumbers.isValidUserInput(userInput);
      if (validUserInput === false) {
        this.throwError(ERROR_MESSAGE.ERROR_USER_INPUT);
      }
      this.turnCheck(userInput, computerNumbers);
    });
  }

  turnCheck(userInput, computerNumbers) {
    const { strike, ball } = this.StrikeCount(userInput, computerNumbers);
    this.printResult(strike, ball);
    strike === 3 ? this.restartOrEndGame() : this.playing(computerNumbers);
  }

  StrikeCount(userInput, computerNumbers) {
    const computerNumbersArr = [...computerNumbers];
    const userInputArr = [...userInput];
    let strike = 0;
    let ball = 0;
    computerNumbersArr.forEach((number, index) => {
      number === userInputArr[index]
        ? strike++
        : userInputArr.includes(number)
        ? ball++
        : 0;
    });
    return { strike, ball };
  }

  printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      return Console.print("낫싱");
    }
    const strikePrint = strike > 0 ? `${strike}스트라이크` : "";
    ball === 0
      ? Console.print(`${strikePrint}`)
      : Console.print(`${ball}볼 ${strikePrint}`);
  }

  restartOrEndGame() {
    Console.readLine(GAME_MESSAGE.GAME_RESTART, (OneOrTwo) => {
      console.log(OneOrTwo);
      if (OneOrTwo === "1") {
        return this.playGame();
      } else if (OneOrTwo === "2") {
        return Console.close();
      } else {
        return this.throwError(ERROR_MESSAGE.ERROR_RESTART_MESSAGE);
      }
    });
  }

  throwError(messages) {
    throw new Error(messages);
  }
}

module.exports = BaseballGame;
