const MissionUtils = require("@woowacourse/mission-utils");

// MissionUtils.Console.print(MissionUtils.Random.pickNumberInList([1, 2, 3]));
// MissionUtils.Console.close();
class App {
  createRandomNumber() {
    this.randomNumber = [...Array(3)].map(() =>
      MissionUtils.Random.pickNumberInRange(1, 9)
    );
  }
  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (ans) => {
      this.userInput = ans.split("").map((v) => +v);
    });
    this.chekUserInput();
  }
  chekUserInput() {
    this.strikeCount = 0;
    this.ballCount = 0;
    for (let i = 0; i < 3; i++) {
      if (this.randomNumber[i] === this.userInput[i]) this.strikeCount++;
      if (this.randomNumber.includes(this.userInput[i])) this.ballCount++;
    }
    this.ballCount -= this.strikeCount;
  }
  printGameResult() {
    if (this.strikeCount === 3) {
    }
  }
  play() {
    this.createRandomNumber();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

// MissionUtils.Console.close();

module.exports = App;
