const MissionUtils = require("@woowacourse/mission-utils");
const { GAME_MESSAGE, CONFIRM, COMPUTER_NUMBER_RANGE } = require("./constant");
const Counter = require("./Counter");
const Printer = require("./Printer");
const Validation = require("./Validation");

class App {
  constructor() {
    this.computerNumberArr = this.getRandomNumber();
  }

  play() {
    MissionUtils.Console.print(GAME_MESSAGE.start);
    this.inputNumberFromUser();
  }

  getRandomNumber() {
    const randomNumberArr = [];
    while (randomNumberArr.length !== COMPUTER_NUMBER_RANGE.length) {
      const randomNum = MissionUtils.Random.pickNumberInRange(
        COMPUTER_NUMBER_RANGE.minimum,
        COMPUTER_NUMBER_RANGE.maximum
      );
      !randomNumberArr.includes(randomNum) && randomNumberArr.push(randomNum);
    }
    return randomNumberArr;
  }

  inputNumberFromUser() {
    MissionUtils.Console.readLine(GAME_MESSAGE.input, (inputNumber) => {
      const validation = new Validation();
      validation.isSingleDigitNaturalNumber(inputNumber);
      validation.isNumberWithoutDuplicate(inputNumber);
      this.playBaseBall(inputNumber);
    });
  }

  playBaseBall(inputNumber) {
    const counter = new Counter();
    const totalCountStrike = counter.countStrike(inputNumber, this.computerNumberArr);
    const totalCountBall = counter.countBall(inputNumber, this.computerNumberArr);
    this.printNumberOfBallAndStrike(totalCountBall, totalCountStrike);
    this.checkThreeStrike(totalCountBall, totalCountStrike);
  }

  printNumberOfBallAndStrike(totalCountBall, totalCountStrike) {
    const print = new Printer();
    print.printPlayGame(totalCountBall, totalCountStrike);
  }

  checkThreeStrike(totalCountBall, totalCountStrike) {
    if (totalCountBall === 0 && totalCountStrike === 3) {
      return this.inputExitOrReStart();
    }
    return this.inputNumberFromUser();
  }

  inputExitOrReStart() {
    MissionUtils.Console.readLine(GAME_MESSAGE.confirm, (inputNumber) => {
      this.checkExitOrRestart(inputNumber);
    });
  }

  checkExitOrRestart(inputNumber) {
    if (inputNumber === CONFIRM.reStart) return this.reStartGame(inputNumber);
    if (inputNumber === CONFIRM.exit) return this.exitGame(inputNumber);
    const validation = new Validation();
    return validation.isConfirmInput();
  }

  reStartGame() {
    this.computerNumberArr = this.getRandomNumber();
    return this.inputNumberFromUser();
  }

  exitGame() {
    return MissionUtils.Console.close();
  }
}

const app = new App();
app.play();
module.exports = App;
