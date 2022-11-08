// FIXME: 비표준 모듈 시스템을 사용하고 있음
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.initializeNumber();
  }

  baseballNumber = [];
  initializeNumber() {
    this.baseballNumber = [];
    while (this.baseballNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      this.pushNumberIntoBaseballNumber(number);
    }
  }

  pushNumberIntoBaseballNumber(number) {
    if (!this.baseballNumber.includes(number)) {
      this.baseballNumber.push(number);
    }
  }
}

module.exports = App;
