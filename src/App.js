const MissionUtils = require("@woowacourse/mission-utils");
const pickNumber = require("./pickNumber.js");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }

  gameStart() {
    const computerNums = pickNumber.pickComputerNum();
  }
}

module.exports = App;
