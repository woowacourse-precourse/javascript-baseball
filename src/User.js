const MissionUtils = require("@woowacourse/mission-utils");

class User {
  constructor() {
    this.userInput;
  }

  checkUserInputValid(userInputArr) {
    if (!userInputArr) {
      this.errorMessage = "입력 값이 없음";
      throw new Error("입력 값이 없음");
    }
    if (userInputArr.includes(0)) {
      throw new Error("0이 포함됨");
    }
    if (
      !userInputArr.every((num) => {
        return Number.isInteger(num) && num > 0;
      })
    ) {
      throw new Error("자연수가 아님");
    }
    if (userInputArr.length !== 3) {
      throw new Error("세 자리 수가 아님");
    }

    if (new Set(userInputArr).size !== userInputArr.length) {
      throw new Error("서로 다른 수가 아님");
    }
    return true;
  }

  convertStrToArr(str) {
    let arr = [...str];
    arr = arr.map((str) => Number(str));
    return arr;
  }
}

module.exports = User;
