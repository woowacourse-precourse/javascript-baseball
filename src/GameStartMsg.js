const MissionUtils = require("@woowacourse/mission-utils");

// const gameStart = () => {
//     MissionUtils.Console.print("숫자 야구 게임을 시작합니다."); 

// };
// console.log(gameStart())

// function gameStartMsg (param) {
//     console.log(param)
// 	MissionUtils.Console.print("숫자 야구 게임을 시작합니다."); 
// }
// console.log(gameStartMsg(1))

// module.exports = gameStartMsg;

// // exports.gameStart = gameStart;
const GameStartMsg = function () {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
// class gameStartMsg {
//     constructor(startMsg, endMsg) {
//       this.startMsg = startMsg;
//       this.endMsg = endMsg;
//     }
//     gameStart() {
//       this.startMsg = MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
//       // 처음시작이면 띄우고 아니면 없어야함.
  
//     }
//   }
  
//   // const computerOutput = new ComputerOutput();
//   // computerOutput.gameStart();
//   // computerOutput.gameEnd();
  
module.exports = GameStartMsg;
