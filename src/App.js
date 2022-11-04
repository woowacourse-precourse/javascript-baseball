const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    console.log('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (message) =>
      MissionUtils.Console.print(message)
    );
  }
}

module.exports = App;

const app = new App();
app.play();
