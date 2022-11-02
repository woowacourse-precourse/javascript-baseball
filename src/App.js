const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.readLine('숫자를 입력해주세요 : ', answer => {
      console.log(answer);
    });
  }
}

new App().play();

module.exports = App;
