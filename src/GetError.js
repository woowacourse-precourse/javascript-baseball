const MissionUtils = require("@woowacourse/mission-utils");
// const UserInputVal = require("./UserInput");

// UserInputVal.userInputNum.answer
// // UserInputVal.userInputArr

// const userInputArr = []
// userInputArr.push(UserInputVal.userInputNum)

let userInputArr = [];

const userInputNum = function () {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    const answerArr = answer.split("").map(Number)
    userInputArr.push(answerArr)

    console.log(userInputArr[0]);

    if(answerArr.length > 3 ){
        throw new Error("세개만 입력부탁쓰.");
        // MissionUtils.Console.print('세개만 입력부탁쓰.');
    }
    
  });

};
userInputNum();

exports.userInputNum = userInputNum;
exports.userInputArr = userInputArr;
// console.log(userInputArr)

// const lengthOverThree = function(){
//     if(answerArr.length > 3 ){
//         MissionUtils.Console.print('안녕하세요.');
//     }
// }

// function sum (x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//       throw new Error("숫자를 입력하세요");
//     }
//     return x + y; 
//   }
  
//   console.log(sum("abc", 1))




// console.log(userInputArr)






// const exchangeRate = 0.91;
 
// // 안 내보냄
// function roundTwoDecimals(amount) {
//   return Math.round(amount * 100) / 100;
// }
 
// // 내보내기
// const obj = {};
// obj.canadianToUs = function (canadian) {
//   return roundTwoDecimals(canadian * exchangeRate);
// };
// obj.usToCanadian = function (us) {
//   return roundTwoDecimals(us / exchangeRate);
// };
// module.exports = obj;