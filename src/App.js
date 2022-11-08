const MissionUtils = require("@woowacourse/mission-utils");

class App {
  START_NUM = 1;
  END_NUM = 9;

  constructor() {
    this.random = [];
    this.userInput = [];
  }

  play() {
    this.generateRandomNums();
  }

  generateRandomNums() {
    let randomNums = [];

    while (randomNums.length !== 3) {
      let randomNum = MissionUtils.Random.pickNumberInRange(
        this.START_NUM,
        this.END_NUM
      );

      if (!randomNums.includes(randomNum))
        randomNums = [...randomNums, randomNum];
    }
    this.random = randomNums;
  }

  getUserInput(comment, callback) {
    MissionUtils.Console.readLine(comment, callback);
  }

  compareRandomWithUserInput() {
    this.getUserInput("숫자를 입력해주세요 : ", (answers) => {
      this.userInput = [...answers];

      this.giveScore();
    });
  }

  giveScore() {
    const result = {};

    this.random.forEach((randomNum, i) => {
      if (randomNum === +this.userInput[i]) {
        result.strike = (result.strike ?? 0) + 1;
      } else if (this.random.includes(+this.userInput[i])) {
        result.ball = (result.ball ?? 0) + 1;
      }
    });
  }
}

const app = new App();
app.play();

module.exports = App;
