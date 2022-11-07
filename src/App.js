const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR_MESSAGE, RESULT_MESSAGE } = require("./constants/MessageConstants");
const { NUMBER } = require("./constants/Constants");

class App {
  play() {
    this.printGameStartPhrase();
    this.startGame();
  }

  // 기능 2 ~ 8 
  startGame() {
    const computerNumber = this.makeComputerNumber();
    this.getUserNumber(computerNumber);
  }

  // 기능 1
  printGameStartPhrase() {
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
    const tmpUserNumberList = [...userNumber];
    const userNumberList = tmpUserNumberList.map(userNumber => Number(userNumber));
    const [firstNumber, secondNumber, thirdNumber] = userNumberList;

    if (!(userNumberList.length === NUMBER.THREE_DIGIT)) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    }

    if (
      (Number.isNaN(firstNumber) === true)
      || (Number.isNaN(secondNumber) === true)
      || (Number.isNaN(thirdNumber) === true)
    ) {
      throw new Error(ERROR_MESSAGE.TYPE_ERROR);
    }

    if (
      !(
        (firstNumber !== secondNumber)
        && (secondNumber !== thirdNumber)
        && (thirdNumber !== firstNumber)
      )
    ) {
      throw new Error(ERROR_MESSAGE.OVERLAP_ERROR);
    }

    if (
      firstNumber === NUMBER.ZERO
      || secondNumber === NUMBER.ZERO
      || thirdNumber === NUMBER.ZERO
    ) {
      throw new Error(ERROR_MESSAGE.ZERO_ERROR);
    }
  }

  // 기능 5
  countBallAndStrike(computerNumber, userNumber) {
    const computerNumberList = [...computerNumber];
    const userNumberList = [...userNumber];
    let ballOrStrike = NUMBER.ZERO;
    let strike = NUMBER.ZERO;

    userNumberList.forEach((userNumber) => {
      if (computerNumberList.includes(userNumber)) {
        ballOrStrike += 1;
      }
    });

    if (ballOrStrike === NUMBER.ZERO) {
      return "nothing";
    }

    for (let index = NUMBER.ZERO; index < NUMBER.THREE_DIGIT; index++) {
      if (computerNumberList[index] === userNumberList[index]) {
        strike += 1;
      }
    }

    const ball = ballOrStrike - strike;

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
    if (Number(userChoiceNumber) === NUMBER.RESTART) {
      this.startGame();
      return;
    }
    
    if (Number(userChoiceNumber) === NUMBER.END) {
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