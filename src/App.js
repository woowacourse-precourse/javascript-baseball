const MissionUtils = require("@woowacourse/mission-utils");
const Random = MissionUtils.Random;
const Console = MissionUtils.Console;

class App {
  constructor() {
    this.computer_random_number = [];
    this.strike = 0;
    this.ball = 0;
    this.nothing = "낫싱";
  }
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    // 기능 1번 구현
    this.computer_random_number = Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

module.exports = App;
