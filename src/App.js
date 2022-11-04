const MissionUtils = require("@woowacourse/mission-utils");

class App {
  pickNumbers() {
    MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const randoms = this.pickNumbers();
    MissionUtils.Console.print(randoms);
    return MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
