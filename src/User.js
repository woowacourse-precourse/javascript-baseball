const MissionUtils = require("@woowacourse/mission-utils");

class User {
  constructor() {
    this.userInput;
  }

  checkUserInputValid(userInputArr) {
    if (!userInputArr) {
      throw new Error();
    }
    if (
      !userInputArr.every((num) => {
        return Number.isInteger(num) && num > 0;
      })
    ) {
      throw new Error();
    }
    if (userInputArr.length !== 3) {
      throw new Error();
    }
    if (userInputArr.includes(0)) {
      throw new Error();
    }
    if (new Set(userInputArr).size !== userInputArr.length) {
      throw new Error();
    }
    return true;
  }

  getUserInputArr() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(
        "숫자를 입력해주세요 : ",
        (userInputArr) => {
          userInputArr = Array.from(String(userInputArr));
          userInputArr = userInputArr.map((num) => Number(num));
          resolve(userInputArr);
          if (this.checkUserInputValid(userInputArr)) {
            return userInputArr;
          }
        }
      );
    });
  }
}

module.exports = User;
