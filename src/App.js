const MissionUtils = require('@woowacourse/mission-utils');
class App {
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerNumber = this.getComputerNumber();
  }
  getComputerNumber() {
    const COMPUTER = [];
    while (COMPUTER.length < 3) {
      const NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!COMPUTER.includes(NUMBER)) {
        COMPUTER.push(NUMBER);
      }
    }
    return COMPUTER;
  }
}

module.exports = App;
