const MissionUtils = require("@woowacourse/mission-utils");
const Counter = require("./Counter");
const Printer = require("./Printer");
const Validation = require("./Validation");

class App {
  constructor() {
    this.computerNumberArr = this.getRandomNumber();
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.inputNumberFromUser();
  }

  getRandomNumber() {
    const randomNumberArr = [];
    while (randomNumberArr.length !== 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      !randomNumberArr.includes(randomNum) && randomNumberArr.push(randomNum);
    }
    return randomNumberArr;
  }

  inputNumberFromUser() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (inputNumber) => {
      const validation = new Validation();
      validation.isValidationSingleDigitNaturalNumber(inputNumber);
      validation.isValidationNumberWithoutDuplicate(inputNumber);
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
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (inputNumber) => {
        this.checkExitOrRestart(inputNumber);
      }
    );
  }

  checkExitOrRestart(inputNumber) {
    const valiation = new Validation();
    if (inputNumber === "1") return this.reStartGame(inputNumber);
    if (inputNumber === "2") return this.exitGame(inputNumber);
    return valiation.isValidationConfirmInput();
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
