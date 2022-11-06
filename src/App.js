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
  play() {
    MissionUtils.Console.print(this.randomNumber);
    MissionUtils.Console.print(this.userInput);
  }
}

let app1 = new App();
app1.createRandomNumber();
app1.getUserInput();

// MissionUtils.Console.close();

module.exports = App;
