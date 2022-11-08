const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.randomNumbers = [];
  }

  // 게임 시작
  play() {
    this.randomNumbers = this.createRandom();
    this.inGame();
  }

  // 랜덤 숫자 생성
  createRandom() {
    const computer = [];
    while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }
}

module.exports = App;
