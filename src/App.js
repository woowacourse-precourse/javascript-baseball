const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #answer;

  pickNumber() {
    const computer = [];
    while (computer.length < 3) {
      const num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(num)) {
        computer.push(num);
      }
    }
    return computer;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.answer = this.pickNumber();
  }
}

module.exports = App;
