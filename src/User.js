const MissionUtils = require("@woowacourse/mission-utils");

class User {
  constructor() {
    this.userInput;
  }

  checkUserInputValid(userInputArr) {
    if (!userInputArr) {
      return false;
    }
    if (
      !userInputArr.every((num) => {
        return Number.isInteger(num) && num > 0;
      })
    ) {
      return false;
    }
    if (userInputArr.length !== 3) {
      return false;
    }
    if (userInputArr.includes(0)) {
      return false;
    }
    if (new Set(userInputArr).size !== userInputArr.length) {
      return false;
    }
    return true;
  }

  convertNumToArr(num) {
    let ARR = [...num];
    ARR = ARR.map((num) => Number(num));
    return ARR;
  }
}

module.exports = User;
