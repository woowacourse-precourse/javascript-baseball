const MissionUtils = require('@woowacourse/mission-utils');
const messages = require('./Constants.js');
class App {
  play() {
    this.printGameStartMessage();
  }

  printGameStartMessage() {
    MissionUtils.Console.print(messages.GAME_START_MESSAGE);
  }
}
module.exports = App;
