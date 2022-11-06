const MissionUtils = require("@woowacourse/mission-utils");

class App {
  makeAnswer = () => {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join("");
  };

  getInputAndCompare = (ANSWER) => {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      MissionUtils.Console.close();
    });
  };

  play = () => {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    const ANSWER = this.makeAnswer();
    this.getInputAndCompare(ANSWER);
  };
}

const app = new App();
app.play();

module.exports = App;
