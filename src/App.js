const MissionUtils = require("@woowacourse/mission-utils");
const { SYS_MESSAGE, BALL_STATE } = require("./Constant.js");

class App {
  alertStart() {
    MissionUtils.Console.print(SYS_MESSAGE.START_MESSAGE);
  }

  showBallState(strikeCnt, ballCnt) {
    if (strikeCnt === 3)
      MissionUtils.Console.print(
        strikeCnt + BALL_STATE.STRIKE + SYS_MESSAGE.FINISH_MESSAGE
      );
    if (strikeCnt > 0 && ballCnt > 0)
      MissionUtils.Console.print(
        ballCnt + BALL_STATE.BALL + strikeCnt + BALL_STATE.STRIKE
      );
    if (strikeCnt > 0 && ballCnt === 0)
      MissionUtils.Console.print(strikeCnt + BALL_STATE.STRIKE);
    if (strikeCnt === 0 && ballCnt > 0)
      MissionUtils.Console.print(ballCnt + BALL_STATE.BALL);
    if (strikeCnt === 0 && ballCnt === 0)
      MissionUtils.Console.print(BALL_STATE.NOTHING);
  }
}

module.exports = App;
