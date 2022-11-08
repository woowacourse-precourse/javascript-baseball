const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = this.getComputerRandomNumberString();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.numberBaseballGame(computer);
  }

module.exports = App;
