const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
}

module.exports = App;

const app = new App();
app.play();

// 콜백함수는 다른 함수에 입력값으로 넣어야 한다.
