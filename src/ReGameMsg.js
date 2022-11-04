const MissionUtils = require("@woowacourse/mission-utils");
// const RandomNum = require("./RandomNum");
// const UserInput = require("./UserInput");

// class ReStart {
//   decideReStart() {
//     MissionUtils.Console.readLine(
//       "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
//       (answer) => {
//         console.log(answer);
//       }
//     );
//   }
// }
// function reStartMsg() {
//   MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",(answer) => {console.log(answer);});
// }

const userDecisionArr=[]

// const obj = {};
// obj.canadianToUs = function (canadian) {
//   return roundTwoDecimals(canadian * exchangeRate);
// };
// obj.usToCanadian = function (us) {
//   return roundTwoDecimals(us / exchangeRate);
// };
// module.exports = obj;




// const reGameMsg = () => {
//   MissionUtils.Console.readLine(
//     "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
//     (answer) => {
//       if (answer === 2) {
//         MissionUtils.Console.close();
//       }
//       if (answer === 1) {
//         UserInput;
//       }
//     }
//   );
// };
"게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
exports.ReGameMsg = function () {
  MissionUtils.Console.readLine('재시작?', (answer) => {
    console.log(`닉네임: ${answer}`);
  });

}
// const regamemsg = new reGameMsg()

// const app = new App();


// MissionUtils.Console.readLine("재시작?",(answer) => {
  //     userDecisionArr.push(answer);
  //     if(userDecisionArr[0] === 2){
  //       console.log("종료")
  //       MissionUtils.Console.close();
  //     }
  //     if (userDecisionArr[0] === 1) {
  //       // UserInput;
  //       MissionUtils.Console.close();
  //     }
  //   }
  // );






// const userDecision = () => {
//   if (reStartMsg === 1) {
//     UserInput.userInputNum()
//   }
// };

// console.log(reStartMsg());
// const reStart = new ReStart();
// reStart.decideReStart();

// module.exports = reGameMsg;

// exports.userDecision = userDecision;
// module.exports = ReStart;
