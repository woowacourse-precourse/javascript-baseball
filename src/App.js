const MissionUtils = require("@woowacourse/mission-utils");
const { SYS_MESSAGE, BALL_STATE } = require("./Constant.js");
const Computer = require("./Computer.js");
const Player = require("./Player.js");
const Judge = require("./Judge.js");

class App {
  constructor() {
    this.computer = new Computer();
    this.player = new Player();
    this.judge = new Judge();
    this.playCnt = 0;
  }

  play() {
    if (this.playCnt === 0) this.alertStart();
    this.playCnt++;

    let computerNum = this.computer.makeRandomNum();
    let playerInput = "";

    while (computerNum !== playerInput) {
      playerInput = this.player.getNumber();
      if (!this.judge.isPlayerInputValid(playerInput)) {
        throw new Error(SYS_MESSAGE.ERROR_MESSAGE);
      }
      this.showBallState(
        this.judge.findStrikeAndBallCnt(computerNum, playerInput)
      );
    }

    MissionUtils.Console.print(SYS_MESSAGE.FINISH_MESSAGE);
    this.askMoreGame();
  }

  alertStart() {
    MissionUtils.Console.print(SYS_MESSAGE.START_MESSAGE);
  }

  showBallState(strikeCnt, ballCnt) {
    if (strikeCnt === 3)
      MissionUtils.Console.print(
        strikeCnt + BALL_STATE.STRIKE + "\n" + SYS_MESSAGE.FINISH_MESSAGE
      );
    if (strikeCnt > 0 && ballCnt > 0)
      MissionUtils.Console.print(
        ballCnt + BALL_STATE.BALL + " " + strikeCnt + BALL_STATE.STRIKE
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

let app = new App();
app.play();
