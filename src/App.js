const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = this.getComputerNum();
  }

  play() {
    Console.readLine("숫자를 입력해주세요 : ", (getUserNum) => {
      this.checkUserNum(getUserNum);
    });
  }

  getComputerNum() {
    const randomNum = [];
    while (randomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(number)) randomNum.push(number);
    }
    return randomNum;
  }

  checkUserNum(getUserNum) {
    if (getUserNum.match(/[^1-9]/)) {
      throw new Error("숫자를 입력해주세요.");
    } else if (new Set(getUserNum.split("")).size !== 3) {
      throw new Error("중복되지 않은 숫자를 입력해주세요.");
    } else if (getUserNum.length !== 3) {
      throw new Error("세자리 숫자를 입력해주세요.");
    }
  }
}

module.exports = App;
