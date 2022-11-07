const MissionUtils = require('@woowacourse/mission-utils');
const gameConstant = require('./GameConstant');

class BaseballGame {
  constructor() {
    this.answer = this.setAnswer();
    this.startMessage = gameConstant.START_MESSAGE;
  }

  setAnswer() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
  }

  printStartMessage() {
    MissionUtils.Console.print(this.startMessage);
  }
}

module.exports = BaseballGame;
