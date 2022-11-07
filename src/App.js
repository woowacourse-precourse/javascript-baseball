const MissionUtils = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE } = require("./constants");
const User = require("./User");
class App {
  play() {
    MissionUtils.Console.print(CONSOLE_MESSAGE.StartGame);
    new User().play();
  }
}

module.exports = App;
