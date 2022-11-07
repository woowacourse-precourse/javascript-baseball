const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const answer = this.getThreeNum();
    this.getUserNum();
  }

  getThreeNum() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getUserNum() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (number) => {});
  }
}

const app = new App();
app.play();

module.exports = App;
