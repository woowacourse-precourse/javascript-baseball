const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(computerRandomNumber = null) {
    this.computerRandomNumber = computerRandomNumber;
  }
  play() {
    greeting();
  }
}

function makeRandomNumberArray() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
}

function greeting() {
  console.log("숫자 야구 게임을 시작합니다.");
}

module.exports = App;
