const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    this.computerData();
    this.userData();
  }

  computerData() {
    const COMPUTER_NUM = [];
    while (COMPUTER_NUM.length < 3) {
      const NUM = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUM.includes(NUM)) {
        COMPUTER_NUM.push(NUM);
      }
    }
    return COMPUTER_NUM;
  }
}

module.exports = App;
