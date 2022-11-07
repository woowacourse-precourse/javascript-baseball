/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computerNumber = 0;
  }

  start() {
    this.computerNumber = 0;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      String(input).split('');
    });
  }

  play() {
    this.start();
    this.getInputNumber();
  }
}

module.exports = App;
