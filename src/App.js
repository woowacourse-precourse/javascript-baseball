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

}

module.exports = App;
