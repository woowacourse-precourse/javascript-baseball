const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  createRandomComNum() {
    const randomNums = [];
    while (randomNums.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 10);
      if (!randomNums.includes(randomNum)) {
        randomNums.push(randomNum);
      }
    }
    return randomNums;
  }

  tryToAnswer(randomNums) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.checkValidation(answer);
      this.getBallStrikeCount(randomNums, answer);
    });
  }
  
}

const app = new App();
app.play();

module.exports = App;
