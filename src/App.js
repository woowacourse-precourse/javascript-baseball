const MissionUtils = require('@woowacourse/mission-utils');
const { Random, Console } = MissionUtils;
class App {
  randomNumbers;

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  saveRandomNumbers() {
    this.randomNumbers = [];
    while (this.randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.randomNumbers.includes(number)) {
        this.randomNumbers.push(number);
      }
    }
  }
}

module.exports = App;
