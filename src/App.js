const { Random, Console } = require('@woowacourse/mission-utils');
const { message, rule } = require('./constants');

class App {
  constructor() {
    this.computerNumbers = [];
    this.gameCount = {
      strike: 0,
      ball: 0,
    };
    this.result = '';
  }

  play() {
    this.computerNumbers = this.generateComputerNumbers();
    Console.print(message.START);
    Console.readLine(message.INPUT, (number) => {
      this.gameCount = this.getStrikeBallCount(number);
      this.result = this.getResult(this.gameCount);
      Console.print(this.result);

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

  getResult({ strike, ball }) {
    const ballMessage = `${ball}${message.BALL}`;
    const strikeMessage = `${strike}${message.STRIKE}`;

    if (ball === 0 && strike === 0) {
      return message.NOTHING;
    }

    if (ball > 0 && strike === 0) {
      return ballMessage;
    }

    if (ball === 0 && strike > 0) {
      return strikeMessage;
    }

    return `${ballMessage} ${strikeMessage}`;
  }
}

module.exports = App;
