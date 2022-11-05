const MissionUtils = require('@woowacourse/mission-utils');
const { Random } = MissionUtils;

class App {
  #baseballNumber = [];

  constructor() {}

  pickBaseballNumber() {
    while (this.#baseballNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!this.#baseballNumber.includes(number)) {
        this.#baseballNumber.push(number);
      }
    }
  }

  play() {}
}

module.exports = App;
