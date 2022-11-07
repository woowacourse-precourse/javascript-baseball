const MissionUtils = require('@woowacourse/mission-utils');
const gameConstant = require('./GameConstant');
const compareNumber = require('./CompareFunctions');

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

  startGame() {
    this.printStartMessage();
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', playerInput => {
      compareNumber(this.answer, playerInput);
    });
  }
}

module.exports = BaseballGame;
