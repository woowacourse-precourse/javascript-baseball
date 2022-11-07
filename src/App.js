// 모듈 선언
const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  showStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    this.showStartMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
