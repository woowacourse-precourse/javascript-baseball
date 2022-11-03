const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (i) => {
      MissionUtils.Console.print(i);
    })
  }
}

const app = new App;
app.play();

module.exports = App;
