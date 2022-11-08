const MissionUtils = require("@woowacourse/mission-utils");
const { SYS_MESSAGE, BALL_STATE } = require("./Constant.js");

class App {
  alertStart() {
    MissionUtils.Console.print(SYS_MESSAGE.START_MESSAGE);
  }
  play() {}
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
  askMoreGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
      (userInputAboutRestart) => {
        if (userInputAboutRestart === "1") MissionUtils.Console.close();
        return this.play();
        if (userInputAboutRestart === "2") MissionUtils.Console.close();
        MissionUtils.Console.print("종료");
        MissionUtils.Console.close();
      }
    );
  }
}

module.exports = App;
