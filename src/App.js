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
    const computerNum = [];
    while (computerNum.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerNum.includes(num)) {
        computerNum.push(num);
      }
    }
    return computerNum;
  }
}

module.exports = App;
