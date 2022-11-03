const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomAnswer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.userInputNum;
  }

  userInput() {
    MissionUtils.Console.readLine("숫자를 입력해주세요.", (inputNum) => {
      if (this.userInputvalidation(inputNum)) {
        console.log(`숫자를 입력해주세요. ${inputNum}`);
        this.userInputNum = inputNum;
      } else {
        const error = new Error("유효한 값이 아닙니다");
        MissionUtils.Console.close();
        throw error;
      }
    });
  }

  userInputvalidation(inputNum) {
    return !isNaN(Number(inputNum)) &&
      inputNum.length === 3 &&
      new Set(inputNum).size === 3 &&
      !inputNum.includes(0)
      ? true
      : false;
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.userInput();
    MissionUtils.Console.print(this.userInputNum);
  }
}

module.exports = App;
