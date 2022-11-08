const BaseballGame = require("./baseball/BaseballGame");
const { console } = require("@woowacourse/mission-utils");
const ComputerNumbers = require("./baseball/ComputerNumbers");
const ValidUserNumbers = require("./baseball/ValidUserInput");
class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    this.baseballGame.initGame();
  }
}

const app = new App();
app.play();

module.exports = App;
