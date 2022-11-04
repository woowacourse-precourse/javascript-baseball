const { Random } = require('@woowacourse/mission-utils');

const RANDOMLIST = Object.freeze({
  STARTPOINT: 1,
  ENDPOINT: 9,
  COUNT: 3,
});

class App {
  #random;

  constructor() {
    this.#random = Random.pickUniqueNumbersInRange(
      RANDOMLIST.STARTPOINT,
      RANDOMLIST.ENDPOINT,
      RANDOMLIST.COUNT,
    );
  }

  get3RandomNumbers() {
    return this.#random;
  }

  play() {}
}

module.exports = App;
