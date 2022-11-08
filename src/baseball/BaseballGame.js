const { Console } = require("@woowacourse/mission-utils");
const ComputerNumbers = require("./ComputerNumbers");
const ValidUserNumbers = require("./ValidUserInput");
const { GAME_MESSAGE, WHAT, ERROR_MESSAGE } = require("../constants/constants");

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
      this.throwError(ERROR_MESSAGE.ERROR_USER_INPUT);
    }
    const { strike, ball } = this.StrikeCount(userInput, this.computerNumbers);
    this.printResult(strike, ball);
    if (strike === 3) {
      Console.readLine(GAME_MESSAGE.GAME_RESTART, this.isvalidRestart);
      return;
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
    } else if (ball > 0 && strike === 0) {
      return Console.print(`${ball}볼`);
    } else if (ball === 0 && strike > 0) {
      return Console.print(`${strike}스트라이크`);
    }
    Console.print(`${ball}볼 ${strike}스트라이크`);

    if (strike === 3) {
      Console.print(GAME_MESSAGE.FINISH_MESSAGE);
    }
  };

  isvalidRestart = (OneOrTwo) => {
    OneOrTwo = Number(OneOrTwo);
    ValidUserNumbers.isvalidRestart(OneOrTwo);

    if (OneOrTwo == 1) {
      this.computerNumbers = ComputerNumbers.randomSelectComputerNumbers();
      this.playGame();
    } else if (OneOrTwo == 2) {
      Console.print(GAME_MESSAGE.GAME_END);
      Console.close();
    }
  };

  throwError(messages) {
    throw new Error(messages);
  }
}

module.exports = BaseballGame;
