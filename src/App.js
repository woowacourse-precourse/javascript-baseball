const MissionUtils = require("@woowacourse/mission-utils");

const START_MESSAGE = "숫자 야구 게임을 시작합니다.";

const printGameStart = () => {
  MissionUtils.Console.print(START_MESSAGE);
};

class App {
  play() {
    printGameStart();
  }
}

module.exports = App;

const app = new App();
app.play();
