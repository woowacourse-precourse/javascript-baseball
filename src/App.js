class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    var firstNumber = MissionUtils.Random.pickNumberInRange();
    var secondNumber = MissionUtils.Random.pickNumberInRange();
    var thirdNumber = MissionUtils.Random.pickNumberInRange();

  }
}

module.exports = App;
