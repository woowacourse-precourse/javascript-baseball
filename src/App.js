const MissionUtils = require("@woowacourse/mission-utils");

const gameStart = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

class App {
  play() {
    gameStart();
  }
}

module.exports = App;

const app = new App();
app.play();
