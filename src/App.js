const { Random, Console } = require('@woowacourse/mission-utils');
const { message, rule } = require('./constants');

class App {
  constructor() {
    this.computerNumbers = [];
    this.gameCount = {
      strike: 0,
      ball: 0,
    };
  }

  play() {
    this.computerNumbers = this.generateComputerNumbers();
    Console.print(message.START);
    Console.readLine(message.INPUT, (number) => {
      Console.print(`입력 숫자 : ${number}`);
      Console.close();
    });
  }

  generateComputerNumbers() {
    const computerNumbers = new Set();

    while (computerNumbers.size < rule.LENGTH) {
      const number = Random.pickNumberInRange(rule.RANGE_START, rule.RANGE_END);
      computerNumbers.add(String(number));
    }

    return [...computerNumbers];
  }

  getStrikeBallCount(userNumber) {
    const strikeBallCount = {
      strike: 0,
      ball: 0,
    };

    [...userNumber].forEach((number) => {
      if (number === this.computerNumbers[0]) {
        strikeBallCount.strike += 1;
        return;
      }

      if (this.computerNumbers.includes(number)) {
        strikeBallCount.ball += 1;
      }
    });

    return strikeBallCount;
  }
}

module.exports = App;
