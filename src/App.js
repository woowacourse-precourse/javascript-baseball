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
    this.readUserInput();
  }

  generateComputerNumbers() {
    const computerNumbers = new Set();

    while (computerNumbers.size < rule.LENGTH) {
      const number = Random.pickNumberInRange(rule.RANGE_START, rule.RANGE_END);
      computerNumbers.add(String(number));
    }

    return [...computerNumbers];
  }

  getStrikeBallCount(userNumber, computerNumbers) {
    const strikeBallCount = {
      strike: 0,
      ball: 0,
    };

    [...userNumber].forEach((number, i) => {
      if (number === computerNumbers[i]) {
        strikeBallCount.strike += 1;
        return;
      }

      if (computerNumbers.includes(number)) {
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

  printResult() {
    const result = this.getResult(this.gameCount);
    Console.print(result);
  }

  readUserInput() {
    Console.readLine(message.INPUT, (number) => {
      this.gameCount = this.getStrikeBallCount(number, this.computerNumbers);
      this.printResult();

      if (this.gameCount.strike === 3) {
        Console.print(message.CORRECT);
        Console.close();
        return;
      }

      this.readUserInput();
    });
  }
}

module.exports = App;
