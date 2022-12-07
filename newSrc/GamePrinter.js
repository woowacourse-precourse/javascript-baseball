const MissionUtils = require('@woowacourse/mission-utils');
const { Score } = require('./Constant');

class GamePrinter {
  static show(msg) {
    MissionUtils.Console.print(msg);
  }

  static showResult(strike, ball) {
    let msg = Score.EMPTY;
    if (ball) msg += `${ball + Score.BALL} `;
    if (strike) msg += `${strike + Score.STRIKE}`;
    if (!strike && !ball) msg = Score.NOTHING;

    return this.show(msg);
  }
}

module.exports = GamePrinter;
