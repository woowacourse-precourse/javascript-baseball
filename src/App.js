/* eslint-disable class-methods-use-this */
const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computerNumber = 0;
  }

  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {}
}

module.exports = App;
