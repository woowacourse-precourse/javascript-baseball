const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.targetNumber = [];
    this.userNumber = [];
  }

  resetTargetNumber() {
    this.targetNumber = [];
    while (this.targetNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.targetNumber.includes(number)) {
        this.targetNumber.push(number);
      }
    }
  }

  getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.userNumber = answer.split('').map(Number);

      if (this.userNumber.includes(NaN) || new Set(this.userNumber).size !== 3) {
        throw 'Invalid input';
      }
    });
  }

  play() {
    this.resetTargetNumber();
    this.getUserNumber();
  }
}

module.exports = App;
