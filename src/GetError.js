const MissionUtils = require("@woowacourse/mission-utils");
const ComputerNum = require("./ComputerNum");
const compareComputer = ComputerNum.randomNumArr[0];
// const compareUser = GetError.userInputArr

// let answerBox = []

class  UserInput {
  constructor(answer) {
    this.answerBox = [answer];
  }
  userInputfunc() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ",(answer) => {
      this.answerBox.push(answer.split("").map(Number));
      console.log(this.answerBox[0]);
      // const answerArr = answer.split("").map(Number);
      // console.log(answerArr)
      // let answerBox = [];
      // this.answerBox.push(answerArr)
      // answerBox.push(answerArr)
      // console.log(this.answerBox[0])
      // return answerBox[0]
      // return this.answerBox[0]
      // if (
      //   answerArr.length !== 0 && answerArr.filter((duplicated) => compareComputer.includes(duplicated) ).length === 0
      // ) {
      //   MissionUtils.Console.print("낫싱");
      // }
    });
  }

}

// const userInput = new UserInput();
// userInput.userInputfunc();
// userInput.gameEnd();
module.exports = UserInput;

class  UserInputJudge extends UserInput{
  constructor(answer) {
    super(answer)
  }
  judge(){
    super.userInputfunc()
    console.log(this.answerBox)
      if (this.answerBox.length !== 0 && this.answerBox.filter((duplicated) => compareComputer.includes(duplicated) ).length === 0
      ) {
        MissionUtils.Console.print("낫싱");
      }


  }
} 

const userInputJudge = new UserInputJudge();
userInputJudge.judge()



// const userInputNum = function () {
//     let userInputArr = []
//     MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
//     const answerArr = answer.split("").map(Number);

//     console.log(answerArr)
//     userInputArr.push(answerArr);  // [[]]
//     console.log(userInputArr[0])  // []

//     // if (answerArr.length > 3) {
//     //   throw new Error("세개만 입력부탁쓰."); // 에러 분리하기
//     // }
//     const Error = require("./Error");
//     // Error.userInputArr.push(userInputArr[0]) ;
//     Error.errorCondition

//     if (
//       userInputArr[0].length !== 0 &&
//       userInputArr[0].filter((duplicated) => compareComputer.includes(duplicated))
//         .length === 0
//     ) {
//       MissionUtils.Console.print("낫싱");}
//   });
// };

// 전역변수 배열에 담앗는데 왜 보존이 안돼애애애액
// 한번 userInputNum이 돌고나면 또 다시 숫자 입력이 나와야함.

// const nothingCheck = function () {
//   console.log(userInputArr);
//   if (
//     userInputArr.length !== 0 &&
//     userInputArr.filter((duplicated) => compareComputer.includes(duplicated))
//       .length === 0
//   ) {
//     MissionUtils.Console.print("낫싱");

//     userInputNum;
//   }
// };
// userInputNum();
// nothingCheck();

// exports.userInputNum = userInputNum;
// exports.nothingCheck = nothingCheck;
// exports.userInputArr = userInputArr;
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
