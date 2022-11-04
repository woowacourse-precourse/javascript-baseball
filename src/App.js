const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (num) => {
      this.checkNum(num);
    });
  }
}

module.exports = App;

const app = new App();
app.play();
