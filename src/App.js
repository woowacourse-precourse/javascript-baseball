const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.gameSet = {};
    this.answer = [];
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

  gameStart () {
    this.gameSet = this.gameSetting();
    this.printMsg('숫자 야구 게임을 시작합니다.');
  }

}

module.exports = App;
