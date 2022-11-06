const MissionUtils = require("@woowacourse/mission-utils");
const mode = require("./a.js");
const Constants = require("./constants/Constants");

class App {
  play() {
    MissionUtils.Console.print(Constants.START_GAME);
  }
}

module.exports = App;
