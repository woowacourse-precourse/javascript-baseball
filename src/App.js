const MissionUtils = require('@woowacourse/mission-utils');
class App {
  constructor() {
    this.computer = '';
    this.user = '';
    this.strike = 0;
    this.ball = 0;
  }

  play() {
    this.startGame();
  }

  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.setComputer();
    MissionUtils.Console.close();
  }

  setComputer() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9) + '';
      if (!this.computer.includes(number)) {
        this.computer += number;
      }
    }
  }
}

module.exports = App;
