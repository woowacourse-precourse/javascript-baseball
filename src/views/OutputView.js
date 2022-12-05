const MissionUtils = require("@woowacourse/mission-utils");

const { MESSAGE } = require("../constant/Message");

const OutputView = {
  printGameStartMessage() {
    MissionUtils.Console.print(MESSAGE.gameStart);
  },

  printResult(ball, strike) {
    if (strike === 3) {
      MissionUtils.Console.print(this.ballStrike(ball, strike));
      return MissionUtils.Console.print(MESSAGE.gameResult.congraturation);
    }
    this.continue(ball, strike);
  },

  continue(ball, strike) {
    ball || strike
      ? MissionUtils.Console.print(this.ballStrike(ball, strike))
      : MissionUtils.Console.print(MESSAGE.gameResult.nothing);
  },

  ballStrike: (ball, strike) => {
    return ball && strike
      ? `${ball}볼 ${strike}스트라이크`
      : ball
      ? `${ball}볼`
      : `${strike}스트라이크`;
  },
};

module.exports = OutputView;
