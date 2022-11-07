const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
class App {
  constructor() {
    this.enemy = [];
    this.userInputArr = [];
    this.strikes = 0;
    this.balls = 0;
  }

  printMessage(message) {
    Console.print(message);
  }

  gameStart() {
  }

  play() {
    this.printMessage("숫자 야구 게임을 시작합니다.");
    this.gameStart();
  }
}

const app = new App();
app.play();
module.exports = App;
