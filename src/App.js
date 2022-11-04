const MissionUtils = require("@woowacourse/mission-utils");
const Counter = require("./Counter");
const Print = require("./Print");
const Valid = require("./Valid");

class App {
  constructor() {
    this.computerNumberArr = this.getRandomNumberFromComputer();
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getUserNumberFromReadLine();
  }

  getUserNumberFromReadLine() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNumberStr) => {
      const validation = new Valid();
      validation.isValid(userNumberStr);
      this.playBaseBall(userNumberStr);
    });
  }

  playBaseBall(userNumberStr) {
    const counterClass = new Counter();
    const totalCountStrike = counterClass.countStrike(
      userNumberStr,
      this.computerNumberArr
    );
    const totalCountBall = counterClass.countBall(
      userNumberStr,
      this.computerNumberArr
    );
    this.printNumberOfBallAndStrike(totalCountBall, totalCountStrike);
  }

  printNumberOfBallAndStrike(totalCountBall, totalCountStrike) {
    const print = new Print();
    print.printPlayGame(totalCountBall, totalCountStrike);
    if (totalCountBall === 0 && totalCountStrike === 3) {
      return this.confirmExitOrReStart();
    }
    return this.getUserNumberFromReadLine();
  }

  confirmExitOrReStart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userNumberStr) => {
        if (userNumberStr === "1") {
          this.computerNumberArr = this.getRandomNumberFromComputer();
          return this.getUserNumberFromReadLine();
        } else if (userNumberStr === "2") {
          return MissionUtils.Console.close();
        }
        throw "새로 시작할려면 1, 종료하려면 2를 입력해주세요.";
      }
    );
  }

  getRandomNumberFromComputer() {
    const randomNumberArr = [];
    while (randomNumberArr.length !== 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      !randomNumberArr.includes(randomNum) && randomNumberArr.push(randomNum);
    }
    return randomNumberArr;
  }
}

const app = new App();
app.play();
module.exports = App;
