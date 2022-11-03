const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  generateDifferRandomNumArr(numOfDigits) {
    const DIFFER_RANDOM_NUM_ARR = [];
    let randomNum;
    while (DIFFER_RANDOM_NUM_ARR.length < numOfDigits) {
      randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!DIFFER_RANDOM_NUM_ARR.includes(randomNum)) {
        DIFFER_RANDOM_NUM_ARR.push(randomNum);
      }
    }
    return DIFFER_RANDOM_NUM_ARR;
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
}

module.exports = App;
