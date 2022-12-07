const MissionUtils = require('@woowacourse/mission-utils');

class GamePrinter {
  static show(msg) {
    MissionUtils.Console.print(msg);
  }

  static showResult(strike, ball) {
    let msg = '';
    if (ball) msg += `${ball}볼 `;
    if (strike) msg += `${strike}스트라이크`;
    if (!strike && !ball) msg = '낫싱';

    return this.show(msg);
  }
}

module.exports = GamePrinter;
