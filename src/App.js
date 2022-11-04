const { Random } = require('@woowacourse/mission-utils');

const RANDOMLIST = Object.freeze({
  STARTPOINT: 1,
  ENDPOINT: 9,
  COUNT: 3,
});

class App {
  #random;

  constructor() {
    const { STARTPOINT, ENDPOINT, COUNT } = RANDOMLIST;
    this.#random = Random.pickUniqueNumbersInRange(STARTPOINT, ENDPOINT, COUNT);
  }

  get3RandomNumbers() {
    return this.#random;
  }

  play() {}
}

module.exports = App;
