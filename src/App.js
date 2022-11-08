const MissionUtils = require("@woowacourse/mission-utils");
const e = require("cors");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  pickUniqueNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(0, 9, 3).join("");
  }
}
module.exports = App;
