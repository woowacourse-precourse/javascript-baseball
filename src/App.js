const MissionUtils = require("@woowacourse/mission-utils");

class App {
  static printGameStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  static isNumber(str) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    const PREFIX_ZERO_REGEXP = /^[0]+[0-9]+$/;
    if (PREFIX_ZERO_REGEXP.test(str) || !NUMBER_REGEXP.test(str)) {
      return false;
    }
    return true;
  }

  static isThreeDigit(str) {
    if (!App.isNumber(str) || str.length !== 3) {
      return false;
    } 
    return true;
  }

  static isAllDifferent(str) {
    const setToCompare = new Set(str);
    if (str.length !== setToCompare.size) {
      return false;
    }
    return true;
  }
  
  play() {
    App.printGameStart();
  }
}

module.exports = App;
