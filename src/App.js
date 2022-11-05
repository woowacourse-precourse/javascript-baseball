const MissionUtils = require("@woowacourse/mission-utils");
class App {
  answer;
  constructor() {
    this.answer = [];
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getRandomNum();

    console.log(this.answer);
  }

  getRandomNum() {
    while (this.answer.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(NUMBER)) {
        this.answer.push(NUMBER);
      }
    }
  }
}

module.exports = App;
