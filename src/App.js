const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;

class App {
  play() {
    this.printStartGame();
  }

  printStartGame() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

module.exports = App;
