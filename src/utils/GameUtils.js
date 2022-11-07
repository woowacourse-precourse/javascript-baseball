const MissionUtils = require("@woowacourse/mission-utils");

class GameUtils {
  constructor() {}

  static userInputToNumberArr(text) {
    const splitString = text.split("");
    let userInputArr = [];
    splitString.forEach((char) => userInputArr.push(Number(char)));

    return userInputArr;
  }

  static printLine(result) {
    MissionUtils.Console.print(result);
  }
}

module.exports = GameUtils;
