const { Random, Console } = require('@woowacourse/mission-utils');
class App {
  #answer = [];

  play() {
    this.#answer = App.#pickRandomNumbers(3);
  }

  static #pickRandomNumbers(count) {
    const result = new Set();
    while (result.size !== count) {
      const random = Random.pickNumberInRange(1, 9);
      result.add(random);
    }
    return Array.from(result);
  }
}

module.exports = App;
