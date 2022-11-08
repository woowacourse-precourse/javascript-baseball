const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  createRandomValue() {
    const TEMP_LIST = Random.pickUniqueNumbersInRange(1, 9, 3)
    return TEMP_LIST;
  }

  openingOutput() {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.close();
  }

  play() {
    this.openingOutput();
    const CORRECT_LIST = this.createRandomValue();
  }
}

module.exports = App;
