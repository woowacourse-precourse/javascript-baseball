import * as MissionUtils from "@woowacourse/mission-utils";

class App {
  play() {}
  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateNum() {
    var num = [];

    while (num.length < 3) {
      var randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (num.includes(randomNum) == false) {
        num.push(randomNum);
      }
    }

    return num;
  }

  checkNum(userNum) {
    const regex = /[^1-9]/;
    if (regex.test(userNum)) {
      throw new Error("숫자만 입력 바랍니다.");
    } else if (userNum.length !== 3) {
      throw new Error("3자리의 숫자를 입력 바랍니다.");
    } else if ([...new Set(str)].length !== 3) {
      throw new Error("숫자의 중복은 허용되지 않습니다. 바른 입력 바랍니다.");
    }
  }
}

module.exports = App;
