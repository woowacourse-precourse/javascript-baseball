const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (inputNum) => {
      console.log(`숫자를 입력해주세요. ${inputNum}`);
    });
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.userInput();
  }
}

module.exports = App;
