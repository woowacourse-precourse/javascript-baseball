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

  getUserInput() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
        resolve((userInput = this.convertNumToArr(userInput)));
        if (this.checkUserInputValid(userInput)) {
          return userInput;
        }
      });
    });
  }

  convertNumToArr(num) {
    const ARR = Array.from(String(num)).map((num) => Number(num));
    return ARR;
  }
}

module.exports = User;
