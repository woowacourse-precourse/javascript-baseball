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

  getHintOfAnswer(result) {
    if (result.ball === 0 && result.strike === 0) {
      MissionUtils.Console.print("낫싱");
      return MissionUtils.Console.close();
    }
    if (result.ball === 0 && result.strike === 3) {
      MissionUtils.Console.print("3스트라이크");
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return MissionUtils.Console.close();
    }
    MissionUtils.Console.print(`${result.ball}볼 ${result.strike}스트라이크 `);
    return MissionUtils.Console.close();
  }
}

module.exports = App;
