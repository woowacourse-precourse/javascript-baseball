const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNumber = [];
  }

  play() {
    const numberList = new Set();
    while (numberList.size < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      numberList.add(randomNumber);
    }
    this.computerNumber.push(...numberList);
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

module.exports = App;
