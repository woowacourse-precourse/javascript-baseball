const { Random, Console } = require('@woowacourse/mission-utils');
const { rule } = require('./constants');

class App {
  constructor() {
    this.computerNumbers = [];
  }

  play() {
    this.computerNumbers = this.generateComputerNumbers();
    Console.close();
  }

  generateComputerNumbers() {
    const computerNumbers = new Set();

    while (computerNumbers.size < rule.LENGTH) {
      const number = Random.pickNumberInRange(rule.RANGE_START, rule.RANGE_END);
      computerNumbers.add(String(number));
    }

    return [...computerNumbers];
  }
}

module.exports = App;
