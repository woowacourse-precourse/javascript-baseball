const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
class App {
  constructor() {
    this.randomNumber = [];
    this.userInput = "";
  }
  createRandomNumber() {
    this.randomNumber = [...Array(3)].map(() =>
      MissionUtils.Random.pickNumberInRange(1, 9)
    );
    this.userInput = this.getUserInput();
  }
  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (ans) => {
      this.userInput = ans.split("").map((v) => +v);
      this.chekUserInput();
    });
  }
  chekUserInput() {
    this.strikeCount = 0;
    this.ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (this.randomNumber[i] === this.userInput[i]) this.strikeCount++;
      if (this.randomNumber.includes(this.userInput[i])) this.ballCount++;
    }
    this.ballCount -= this.strikeCount;
    this.printGameResult();
  }
  printGameResult() {
    MissionUtils.Console.print(`${this.ballCount} 볼`);
    MissionUtils.Console.print(`${this.strikeCount} 스트라이크`);
    if (this.strikeCount === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      MissionUtils.Console.readLine(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
        (ans) => {
          if (ans === 1) {
            this.play();
          } else if (ans === 2) {
            MissionUtils.Console.close();
          } //1 or 2 제외 다른 거 입력했을 때 생각.
        }
      );
    } else {
      this.getUserInput();
    }
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.createRandomNumber();
  }
}

const app = new App();
app.play();

// MissionUtils.Console.close();

module.exports = App;
