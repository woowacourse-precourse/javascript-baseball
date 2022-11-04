const MissionUtils = require("@woowacourse/mission-utils");

class App {
  print(message) {
    return MissionUtils.Console.print(message);
  }

  pickNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  startGame() {
    this.print("숫자 야구 게임을 시작합니다.");
    return this.pickNumbers();
  }
  play() {
    this.startGame();
    return MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
