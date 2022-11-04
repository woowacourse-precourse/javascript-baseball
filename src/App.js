const MissionUtils = require("@woowacourse/mission-utils");
class App {
  selectNum() {
    const computer = new Set();
    while (computer.size < 3) {
      computer.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return String([...computer].join(""));
  }

  play() {
    MissionUtils.Console.print("숫자게임을 시작합니다.");
    this.selectNum();
  }
}

module.exports = App;
