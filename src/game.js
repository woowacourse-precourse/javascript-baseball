const MissionUtils = require('@woowacourse/mission-utils');

class Game {
  start(startMessage) {
    MissionUtils.Console.print(startMessage);
  }
}

module.exports = Game;
