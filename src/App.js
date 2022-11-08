const { Console } = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");
class App {
  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    new BaseballGame();
  }
}
const app = new App();
app.play();
module.exports = App;
