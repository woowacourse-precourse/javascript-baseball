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

  checkValidation(answer) {
    if (answer.length != 3)
      throw new Error("입력하신 숫자가 3자리가 아닙니다.");
    else if (
      answer[0] == answer[1] ||
      answer[0] == answer[2] ||
      answer[1] == answer[2]
    ) {
      throw new Error("입력하신 숫자에 똑같은 숫자가 존재합니다.");
    } else if (isNaN(answer) || answer.includes(0)) {
      throw new Error("입력하신 글자에 1~9가 아닌 글자가 포함되어 있습니다.");
    }
  }
  
}

const app = new App();
app.play();

module.exports = App;
