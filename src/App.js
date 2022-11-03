const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다");
  }

  getRandomNumber() {
    MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}

const numberBaseball = new App();

module.exports = App;
