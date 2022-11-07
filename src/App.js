const MissionUtils = require("@woowacourse/mission-utils");
const game = require("./game")

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    const computerNumber = game.computerNumber()
  }
}

module.exports = App;
