const MissionUtils = require("@woowacourse/mission-utils");

const ComputerNum = require("./ComputerNum");
const compareComputer = ComputerNum.randomNumArr[0];
// const compareUser = GetError.userInputArr

// let answerBox = []

// class RandomNum {
//   constructor() {
//     this.answerBox = [];
//   }
// }

class UserInput {
  constructor() {
    this.answerBox = [];
  }
  userInputfunc() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.answerBox.length = 0;
      this.answerBox.push(answer.split("").map(Number));
      // this.userInputfunc(this.callback);
      this.isError(this.answerBox);
      this.isNothing(this.answerBox);
      // this.isNothing(this.userInputfunc());
      this.isBall(this.answerBox);
      this.isStrike(this.answerBox);
      this.isCorrect(this.answerBox);
      this.reGame(this.answerBox);
    });
  }
  isError() {
    if (this.answerBox[0].length !== 3) {
      throw new Error("숫자를 3개 입력해주세요");
    }
    if (this.answerBox[0].every((el) => isNaN(el) === true)) {
      throw new Error("숫자만 입력해주세요");
    }
    if (!this.answerBox[0].every((el) => el > 0)) {
      throw new Error("1에서 9까지의 수를 입력해주세요");
    }
    const isDuplicate = new Set(this.answerBox[0]);
    if (this.answerBox[0].length !== isDuplicate.size) {
      throw new Error("중복되지 않는 수를 입력해주세요");
    }
  }
  isNothing() {
    const userNum = this.answerBox[0];
    if (
      userNum.length === 3 &&
      userNum.filter((duplicated) => compareComputer.includes(duplicated))
        .length === 0
    ) {
      MissionUtils.Console.print("낫싱");
      this.userInputfunc(this.answerBox);
    }
  }
  isBall() {
    const userNum = this.answerBox[0];
    let strikeCount = 0;
    for (let i = 0; i < compareComputer.length; i++) {
      if (userNum[i] === compareComputer[i]) {
        strikeCount++;
      }
    }
    if (
      strikeCount === 0 &&
      userNum.filter((duplicated) => compareComputer.includes(duplicated))
        .length !== 0
    ) {
      const dupNum = userNum.filter((duplicated) =>
        compareComputer.includes(duplicated)
      ).length;
      MissionUtils.Console.print(`${dupNum}볼`);
      this.userInputfunc(this.answerBox);
    }
    // if (
    //   userNum.filter((duplicated) => compareComputer.includes(duplicated))
    //     .length !== 0
    // ) {
    //   const dupNum = userNum.filter((duplicated) =>
    //     compareComputer.includes(duplicated)
    //   ).length;
    //   MissionUtils.Console.print(`${dupNum}볼`);
    // }
  }
  isStrike() {
    const userNum = this.answerBox[0];
    let strikeCount = 0;
    for (let i = 0; i < compareComputer.length; i++) {
      if (userNum[i] === compareComputer[i]) {
        strikeCount++;
      }
    }
    if (strikeCount !== 0) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
    }
  }
  isCorrect() {
    const userNum = this.answerBox[0];
    if (userNum.toString() === compareComputer.toString()) {
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
    }
  }
  reGame() {
    const userNum = this.answerBox[0];
    if (userNum.toString() === compareComputer.toString()) {
      MissionUtils.Console.print(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
    }
    MissionUtils.Console.readLine("", (reGameAnswer) => {
      if (reGameAnswer === "2") {
        MissionUtils.Console.close();
      }
      if (reGameAnswer === "1") {
        this.userInputfunc(this.answerBox);
      }
    });
  }
  // 배열 초기화?
  // ballAndStrike(){
  //   if(!isNothing()){
  //     MissionUtils.Console.print(``);
  //   }
  // }
}
// 자리는 같지 않은데 정답 숫자와 겹치는 요소가 있는지
// 인덱스오브로 자리가 같은지.
const userInput = new UserInput();

userInput.userInputfunc();
// this.answerBox
// userInput.judge(this.answerBox)
