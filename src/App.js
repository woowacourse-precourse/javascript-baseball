const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  print(message) {
    MissionUtils.Console.print(message);
  }

  play() {
    this.print("숫자 야구 게임을 시작합니다.");
    this.print("숫자를 입력해주세요 : ");
  }
}

const app = new App();
app.play();

module.exports = App;
