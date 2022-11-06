const MissionUtils = require("@woowacourse/mission-utils");

class App {
  printStart() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    MissionUtils.Console.close();
  }
  makeAnswer() {
    const answer = [];
    while (answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    return answer;
  }

  play() {
    this.printStart();
    let answer = this.makeAnswer();

  }
}

const app = new App();
app.play();

module.exports = App;
