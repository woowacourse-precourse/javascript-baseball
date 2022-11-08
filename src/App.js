const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.printStart();
  }

  /** 1. 게임시작 안내 문구 출력*/
  printStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
}

const app = new App();
app.play();

module.exports = App;
