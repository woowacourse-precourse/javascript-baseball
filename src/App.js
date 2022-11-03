const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.init();
  }

  initUserInputInterface() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      Console.print(input);
    });
  }

  init() {
    this.initUserInputInterface();
  }
}

const app = new App();
app.play();

module.exports = App;
