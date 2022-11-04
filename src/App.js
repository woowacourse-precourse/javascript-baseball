const MissionUtils = require("@woowacourse/mission-utils");

const printer = (message) => {
  MissionUtils.Console.print(message);
};

class App {
  play() {
    printer("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

module.exports = { App, printer };
