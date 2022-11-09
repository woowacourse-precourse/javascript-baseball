const MissionUtils = require("@woowacourse/mission-utils");
const BaseballGame = require("./BaseballGame");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.firstPlay();
  }
}

const app = new App();
app.play();

module.exports = App;
