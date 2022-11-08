const { Console } = require("@woowacourse/mission-utils");
const ComputerNumbers = require("./ComputerNumbers");
const ValidUserNumbers = require("./ValidUserInput");
const { GAME_MESSAGE, ERROR_MESSAGE } = require("../constants/constants");

class BaseballGame {
  constructor() {
    this.FirstGame = true;
  }

  playGame = () => {
    if (this.FirstGame) {
      Console.print(GAME_MESSAGE.START_MESSAGE);
      this.computerNumbers = ComputerNumbers.randomSelectComputerNumbers();
      this.FirstGame = false;
    }
    Console.readLine(GAME_MESSAGE.ENTER_NUMBER, this.playing);
  };

  playing = (userInput) => {
    const validUserInput = ValidUserNumbers.isValidUserInput(userInput);
    if (validUserInput === false) {
      return this.throwError(ERROR_MESSAGE.ERROR_USER_INPUT);
    }
    const { strike, ball } = this.StrikeCount(userInput, this.computerNumbers);
    this.printResult(strike, ball);
    if (strike === 3) {
      return Console.readLine(GAME_MESSAGE.GAME_RESTART, this.isValidRestart);
    }
    this.playGame();
  };

  StrikeCount = (userInput, computerNumbers) => {
    const computerNumbersArr = [...computerNumbers];
    const userInputArr = [...userInput];
    let strike = 0;
    let ball = 0;
    computerNumbersArr.forEach((number, index) => {
      number === Number(userInputArr[index])
        ? strike++
        : userInputArr.includes(number.toString())
        ? ball++
        : 0;
    });
    return { strike, ball };
  };

  printResult = (strike, ball) => {
    if (strike === 0 && ball === 0) {
      return Console.print("낫싱");
    }
    const strikePrint = strike > 0 ? `${strike}스트라이크` : "";
    ball === 0
      ? Console.print(`${strikePrint}`)
      : Console.print(`${ball}볼 ${strikePrint}`);
  };

  isValidRestart = (OneOrTwo) => {
    OneOrTwo = Number(OneOrTwo);
    ValidUserNumbers.isValidRestart(OneOrTwo);
    if (OneOrTwo == 1) {
      this.computerNumbers = ComputerNumbers.randomSelectComputerNumbers();
      return this.playGame();
    }
    Console.close();
  };

  throwError(messages) {
    throw new Error(messages);
  }
}

module.exports = BaseballGame;
