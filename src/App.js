const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const { GAME_MESSAGE } = require("./constants");

class App {
  play() {
    Console.print(GAME_MESSAGE.START);
  }
}

module.exports = App;
