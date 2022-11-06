const { Console } = require('@woowacourse/mission-utils');
const computerUtils = require('./utils/computerUtils');

class App {
  answer = [];

  play() {
    this.answer = computerUtils.getRandomNumber();
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

module.exports = App;
