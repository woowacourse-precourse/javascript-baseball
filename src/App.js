const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE } = require("./constants/MessageConstants");

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

    while (computerNumberList.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

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

    if (!(userNumberList.length === 3)) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    }

    if ((isNaN(firstNumber) == true) || (isNaN(secondNumber) == true) || (isNaN(thirdNumber) == true)) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }

    if (!((firstNumber !== secondNumber) && (secondNumber !== thirdNumber) && (thirdNumber !== firstNumber))) {
      throw new Error(ERROR_MESSAGE.OVERLAP_ERROR);
    }

    if (firstNumber === 0 || secondNumber === 0 || thirdNumber === 0) {
      throw new Error(ERROR_MESSAGE.ZERO_ERROR);
    }
  }

  // 기능 5
  countBallAndStrike(computerNumber, userNumber) {
    const computerNumberList = Array.from(computerNumber);
    const userNumberList = Array.from(userNumber);

    let ballOrStrike = 0;
    let ball = 0;
    let strike = 0;

    for (let userNumber of userNumberList) {
      if (computerNumberList.includes(userNumber)) {
        ballOrStrike += 1;
      }
    }

    if (ballOrStrike === 0) {
      return "nothing";
    }

    for (let i = 0; i < 3; i++) {
      if (computerNumberList[i] === userNumberList[i]) {
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

    if (strike === 3) {
      MissionUtils.Console.print(RESULT_MESSAGE.SUCCESS);
      return "end";
    }

    if (ball === 0) {
      MissionUtils.Console.print(`${strike}` + RESULT_MESSAGE.STRIKE);
      return;
    }

    if (strike === 0) {
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

    if (userChoiceNumber === '1') {
      this.StartGame();
      return;
    }
    
    if (userChoiceNumber === '2') {
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