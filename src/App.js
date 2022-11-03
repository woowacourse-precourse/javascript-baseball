const MissionUtils = require("@woowacourse/mission-utils");
const Counter = require("./Counter");
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
    this.getUserNumberFromReadLine();
  }

  printNumberOfBallAndStrike(totalCountBall, totalCountStrike) {
    if (totalCountStrike === 0 && totalCountBall === 0) {
      return MissionUtils.Console.print("낫싱");
    } else if (totalCountStrike === 3) {
      MissionUtils.Console.print(`${totalCountStrike}스트라이크`);
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.confirmExitOrReStart();
    } else if (totalCountBall === 0) {
      return MissionUtils.Console.print(`${totalCountStrike}스트라이크`);
    } else if (totalCountStrike === 0) {
      return MissionUtils.Console.print(`${totalCountBall}볼`);
    }
    return MissionUtils.Console.print(
      `${totalCountBall}볼 ${totalCountStrike}스트라이크`
    );
  }

  confirmExitOrReStart() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
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
