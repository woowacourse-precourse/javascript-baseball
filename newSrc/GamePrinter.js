const MissionUtils = require('@woowacourse/mission-utils');

class GamePrinter {
  static show(msg) {
    MissionUtils.Console.print(msg);
  }
}

module.exports = GamePrinter;
