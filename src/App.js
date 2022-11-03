const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {}
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      MissionUtils.Console.print(userInput);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
