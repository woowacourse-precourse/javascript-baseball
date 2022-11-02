const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(input) {
    this.input = input;
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

let input = "hi";
const app = new App();
app.play();

module.exports = App;
