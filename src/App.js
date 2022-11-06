const MissionUtils = require("@woowacourse/mission-utils");
class App {
  randomNumber = [];

  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    this.makeRandomNumber();
  }
  makeRandomNumber() {
    let arr = new Set();
    while (arr.size < 3) {
      arr.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    this.randomNumber = Array.from(arr);
  }
}

module.exports = App;
