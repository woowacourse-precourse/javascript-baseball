const MissionUtils = require("@woowacourse/mission-utils");
class App {
  answer;
  constructor() {
    this.answer = [];
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.getRandomNum();
    this.getUserAnswer();
  }

  getRandomNum() {
    while (this.answer.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(NUMBER)) {
        this.answer.push(NUMBER);
      }
    }
  }

  getUserAnswer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 :", (answer) => {
      if (
        answer.length !== 3 &&
        [...new Set(answer.split(""))].length !== 3 &&
        !/^\d+$/.test(answer)
      )
        throw Error();
      console.log(answer);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
