const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.gameSet = {};
    this.round = 0;
    this.score = {
      strike: 0,
      ball: 0,
    }
  }

  gameSetting (min = 1, max = 9, length = 3) {
    return {
      NUM_MIN : min,
      NUM_MAX : max,
      NUM_LENGTH : length,
    };
  }

  printMsg(msg) {
    Console.print(msg);
    Console.close();
  }

}

module.exports = App;
