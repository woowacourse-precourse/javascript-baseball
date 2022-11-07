const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #answer;

  constructor() {
    this.makeAnswer();
  }

  makeAnswer() {
    this.#answer = [];
    while (this.#answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#answer.includes(number)) {
        this.#answer.push(number);
      }
    }
  }

  play() {}
}

module.exports = App;
