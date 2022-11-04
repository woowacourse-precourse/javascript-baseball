const MissionUtils = require("@woowacourse/mission-utils");

const ReGameMsg = require("./ReGameMsg");

class ComputerOutput {
  constructor(startMsg, endMsg) {
    this.startMsg = startMsg;
    this.endMsg = endMsg;
  }
  // gameStart() {
  //   this.startMsg = MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  //   // 처음시작이면 띄우고 아니면 없어야함.

  // }
  gameEnd() {
    
    this.endMsg = MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료 ");
    
    ReGameMsg;
  }
}


const computerOutput = new ComputerOutput();
// computerOutput.gameStart();
computerOutput.gameEnd();

module.exports = ComputerOutput;
