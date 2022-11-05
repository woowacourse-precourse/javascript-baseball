const MissionUtils = require("@woowacourse/mission-utils");
const Counter = require("./Counter");
const Print = require("./Printer");
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
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const validation = new Validation();
      validation.isValidation(answer);
      this.playBaseBall(answer);
    });
  }

  playBaseBall(answer) {
    const counter = new Counter();
    const totalCountStrike = counter.countStrike(answer, this.computerNumberArr);
    const totalCountBall = counter.countBall(answer, this.computerNumberArr);
    this.printNumberOfBallAndStrike(totalCountBall, totalCountStrike);
  }

  printNumberOfBallAndStrike(totalCountBall, totalCountStrike) {
    const print = new Print();
    print.printPlayGame(totalCountBall, totalCountStrike);
    if (totalCountBall === 0 && totalCountStrike === 3) {
      return this.confirmExitOrReStart();
    }
    return this.inputNumberFromUser();
  }

  confirmExitOrReStart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (answer) => {
        if (answer === "1") {
          this.computerNumberArr = this.getRandomNumber();
          return this.inputNumberFromUser();
        } else if (answer === "2") {
          return MissionUtils.Console.close();
        }
        throw "새로 시작할려면 1, 종료하려면 2를 입력해주세요.";
      }
    );
  }
}

const app = new App();
app.play();
module.exports = App;
