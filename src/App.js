const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE } = require("./constants/MessageConstants");
const { NUMBER } = require("./constants/Constants");

class App {
  play() {
    this.PrintGameStartPhrase();
    this.StartGame();
  }

  // 기능 2 ~ 8 
  StartGame() {
    const computerNumber = this.makeComputerNumber();
    this.getUserNumber(computerNumber);
  }

  // 기능 1
  PrintGameStartPhrase() {
    MissionUtils.Console.print(MESSAGE.START);
  }

  // 기능 2
  makeComputerNumber() {
    const computerNumberList = [];

    while (computerNumberList.length < NUMBER.THREE_DIGIT) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(NUMBER.RANGE_START, NUMBER.RANGE_END);

      if (!(computerNumberList.includes(randomNumber))) {
        computerNumberList.push(randomNumber);
      }
    }

    return computerNumberList.join("");
  }

  // 기능 3
  getUserNumber(computerNumber) {

    MissionUtils.Console.readLine(MESSAGE.INPUT, (userNumber) => {
      this.checkValidityUserNumber(userNumber);

      const checkResult = this.countBallAndStrike(computerNumber, userNumber);

      const result = this.printResult(checkResult);

      if (result === "end") {
        this.reStartOrEnd();
      }

      this.getUserNumber(computerNumber);
    });
  }

  // 기능 4
  checkValidityUserNumber(userNumber) {

    const userNumberList = Array.from(userNumber);
    const firstNumber = Number(userNumberList[0]);
    const secondNumber = Number(userNumberList[1]);
    const thirdNumber = Number(userNumberList[2]);

    if (!(userNumberList.length === NUMBER.THREE_DIGIT)) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    }

    if ((isNaN(firstNumber) == true) || (isNaN(secondNumber) == true) || (isNaN(thirdNumber) == true)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }

    if (!((firstNumber !== secondNumber) && (secondNumber !== thirdNumber) && (thirdNumber !== firstNumber))) {
      throw new Error(ERROR_MESSAGE.OVERLAP_ERROR);
    }

    if (firstNumber === NUMBER.ZERO || secondNumber === NUMBER.ZERO || thirdNumber === NUMBER.ZERO) {
      throw new Error(ERROR_MESSAGE.ZERO_ERROR);
    }
  }

  // 기능 5
  countBallAndStrike(computerNumber, userNumber) {
    const computerNumberList = Array.from(computerNumber);
    const userNumberList = Array.from(userNumber);

    let ballOrStrike = NUMBER.ZERO;
    let ball = NUMBER.ZERO;
    let strike = NUMBER.ZERO;

    for (let userNumber of userNumberList) {
      if (computerNumberList.includes(userNumber)) {
        ballOrStrike += 1;
      }
    }

    if (ballOrStrike === NUMBER.ZERO) {
      return "nothing";
    }

    for (let index = NUMBER.ZERO; index < NUMBER.THREE_DIGIT; index++) {
      if (computerNumberList[index] === userNumberList[index]) {
        strike += 1;
      }
    }
    ball = ballOrStrike - strike;

    return [ball, strike];
  }

  // 기능 6
  printResult(checkResult) {
    const ball = checkResult[0];
    const strike = checkResult[1];

    if (checkResult === "nothing") {
      MissionUtils.Console.print(RESULT_MESSAGE.NOTHING);
      return;
    }

    if (strike === NUMBER.THREE_DIGIT) {
      MissionUtils.Console.print(RESULT_MESSAGE.SUCCESS);
      return "end";
    }

    if (ball === NUMBER.ZERO) {
      MissionUtils.Console.print(`${strike}` + RESULT_MESSAGE.STRIKE);
      return;
    }

    if (strike === NUMBER.ZERO) {
      MissionUtils.Console.print(`${ball}` + RESULT_MESSAGE.BALL);
      return;
    }

    MissionUtils.Console.print(`${ball}` + RESULT_MESSAGE.BALL + ` ${strike}` + RESULT_MESSAGE.STRIKE);
    return;
  }

  // 기능 7
  reStartOrEnd() {
    MissionUtils.Console.readLine(MESSAGE.RESTARTOREND, (userChoiceNumber) => {
      this.checkUserChoiceNumber(userChoiceNumber);
    });

  }

  // 기능 8
  checkUserChoiceNumber(userChoiceNumber) {

    if (userChoiceNumber == NUMBER.RESTART) {
      this.StartGame();
      return;
    }
    
    if (userChoiceNumber == NUMBER.END) {
      MissionUtils.Console.print(MESSAGE.END);
      MissionUtils.Console.close();
      return;
    }

    throw new Error(ERROR_MESSAGE.WRONG_INPUT_ERROR);
  }
}

const baseballGame = new App();
baseballGame.play();

module.exports = App;