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

  isStrike(randomItem, inputItem) {
    return randomItem === inputItem;
  }

  countStrike(random, input) {
    return input.filter((inputItem, index) =>
      this.isStrike(random[index], inputItem),
    ).length;
  }

  isBall(random, input, numberIndex) {
    const randomItem = random[numberIndex];
    const inputItem = input[numberIndex];

    return !this.isStrike(randomItem, inputItem) && random.includes(inputItem);
  }

  countBall(random, input) {
    return input.filter((_, index) => this.isBall(random, input, index)).length;
  }

  play() {}
}

module.exports = App;
