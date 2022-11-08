const MissionUtils = require("@woowacourse/mission-utils");
const game = require("./Game");
const { START_MESSAGE } = require("./Constants");

class App {
  play() {
    MissionUtils.Console.print(START_MESSAGE);
    game();
  }
}

const app = new App();
app.play();

module.exports = App;
