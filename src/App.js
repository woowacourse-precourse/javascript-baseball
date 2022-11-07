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
  play() {}
}

const app = new App();
app.play();
module.exports = App;
