const MissionUtils = require('@woowacourse/mission-utils');
const gameConstant = require('./GameConstant');

class BaseballGame {
  printStartMessage() {
    MissionUtils.Console.print(this.startMessage);
  }
}

module.exports = BaseballGame;
