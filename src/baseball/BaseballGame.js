const { Console } = require("@woowacourse/mission-utils");
const ComputerNumbers = require("./ComputerNumbers");
const ValidUserNumbers = require("./ValidUserInput");
const { GAME_MESSAGE, WHAT, ERROR_MESSAGE } = require("../constants/constants");

class BaseballGame {
  constructor() {
    this.GameStart(true);
  }

  GameStart(FirstGame) {
    this.FirstGame = FirstGame;
    this.computerNumbers = ComputerNumbers.randomSelectComputerNumbers();
  }

  playGame = () => {
    if (this.FirstGame) {
      Console.print(GAME_MESSAGE.START_MESSAGE);
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
    console.log(computerNumbersArr);
    console.log(userInputArr);
    computerNumbersArr.forEach((number, index) => {
      number === Number(userInputArr[index])
        ? strike++
        : Number(userInputArr.includes(number))
        ? ball++
        : 0;
    });
    return { strike, ball };
  };

  printResult = (strike, ball) => {
    if (strike === 0 && ball === 0) {
      return Console.print(WHAT.NOTHING);
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
      this.GameStart(false);
      this.playGame();
    } else if (OneOrTwo == 2) {
      Console.print("GAME_MESSAGE.GAME_END");
      Console.close();
    }
  };

  throwError(messages) {
    throw new Error(messages);
  }
}

module.exports = BaseballGame;
