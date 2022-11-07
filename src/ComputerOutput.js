const MissionUtils = require("@woowacourse/mission-utils");
const GetError = require("./GetError")
// const ReGameMsg = require("./ReGameMsg");
const ComputerNum = require("./ComputerNum");
const compareComputer = ComputerNum.randomNumArr[0];

class ComputerOutput {
  constructor(answer) {
    this.answer = answer;
  }
  // gameStart() {
  //   this.startMsg = MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  //   // 처음시작이면 띄우고 아니면 없어야함.

  // }
  gameEnd() {
      const app = new GetError();
      let answerBox = app.userInputfunc()
      answerBox = this.answer
      if (
        answerBox.length !== 0 && answerBox.filter((duplicated) => compareComputer.includes(duplicated) ).length === 0
      ) {
        MissionUtils.Console.print("낫싱");
      }
    // this.endMsg = MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료 ");
    
    // ReGameMsg;
  }
}


const computerOutput = new ComputerOutput();
// computerOutput.gameStart();
computerOutput.gameEnd();

module.exports = ComputerOutput;
