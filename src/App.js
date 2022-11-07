const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const compNumArr = [];
    const userNumArr = [];

    getCompNumArray(compNumArr);
    printBeginGame();
  }
}
module.exports = App;

function getCompNumArray(compNumArr) {
  while (compNumArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!compNumArr.includes(number)) {
      compNumArr.push(number);
    }
  }
}

function printBeginGame() {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
}
