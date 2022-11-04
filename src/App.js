const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerPick() { //컴퓨터가 1부터 9 사이의 서로다른 3개의 숫자를 정하는 메서드
    const COMPUTER=MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    MissionUtils.Console.close();
    return COMPUTER;
  }
  play() {}
}

module.exports = App;
