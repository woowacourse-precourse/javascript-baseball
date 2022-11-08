import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {}
  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateNum() {
    var num = [];

    while (num.length < 3) {
      var randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (num.includes(randomNum) == false) {
        num.push(randomNum);
      }
    }

    return num;
  }
}

module.exports = App;
