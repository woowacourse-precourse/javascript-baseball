const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.count = "";
  }
  play() {
    this.gameStart();
    this.count = this.generateCount();
    this.getUserInput();
  }

  gameStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateCount() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).reduce(
      (acc, cur) => acc + cur,
      ""
    );
  }

  getUserInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {});
  }
}

module.exports = App;
