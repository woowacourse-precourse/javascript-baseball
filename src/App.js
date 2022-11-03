const MissionUtils = require("@woowacourse/mission-utils");
const print = require("./print.js");
const game = require("./game.js");

class App {
  play() {
    print.start();
    this.answer = game.getAnswer();
  }
}

const app = new App();
app.play();

module.exports = App;
