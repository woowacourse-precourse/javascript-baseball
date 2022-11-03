const MissionUtils = require("@woowacourse/mission-utils");
const message = require("./constants/message.js");

class App {
  constructor() {
    MissionUtils.Console.print(message.GAME_START);
  }

  play() {}
}

const app = new App();
app.play();

module.exports = App;
