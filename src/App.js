const MissionUtils = require("@woowacourse/mission-utils");
const { error, Console } = require("console");

class App {
  play() {
    startGame();
  }
}

module.exports = App;

function startGame() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}
