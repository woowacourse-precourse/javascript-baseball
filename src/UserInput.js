const MissionUtils = require("@woowacourse/mission-utils");

const userInputArr = [];

const userInputNum = function () {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    // userInputArr.push(answer);
    // 에러?
    // console.log(answer)
    MissionUtils.Console.close();
  });

};
// class UserInput {
//   userInputNum() {
//     MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
//       userInputArr.push(answer);
//     });
    
//     // MissionUtils.Console.print("adf \nadsf"); 컴퓨터아웃풋
//   }
// }

// const userInput = new UserInput();
// userInput.userInputNum();


userInputNum();
exports.userInputNum = userInputNum;

exports.userInputArr = userInputArr;