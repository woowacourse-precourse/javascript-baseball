const { Random, Console } = require('@woowacourse/mission-utils');
const { message, rule } = require('./constants');

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.gameCount = {
      strike: 0,
      ball: 0,
    };
    this.result = '';
  }

  play() {
    this.setComputerNumbers();
    Console.print(message.START);
    this.readUserInput();
  }

  setComputerNumbers() {
    const computerNumbers = new Set();

    while (computerNumbers.size < rule.LENGTH) {
      const number = Random.pickNumberInRange(rule.RANGE_START, rule.RANGE_END);
      computerNumbers.add(String(number));
    }

    this.computerNumbers = [...computerNumbers];
  }

  readUserInput() {
    Console.readLine(message.INPUT, (number) => {
      this.userNumbers = [...number];

      this.setStrikeBallCount();
      this.setResult();
      Console.print(this.result);

      if (this.gameCount.strike === 3) {
        Console.print(message.CORRECT);
        this.readRestartInput();
      }

      this.readUserInput();
    });
  }

  setStrikeBallCount() {
    const strikeBallCount = {
      strike: 0,
      ball: 0,
    };

    this.userNumbers.forEach((number, i) => {
      if (number === this.computerNumbers[i]) {
        strikeBallCount.strike += 1;
        return;
      }

      if (this.computerNumbers.includes(number)) {
        strikeBallCount.ball += 1;
      }
    });

    this.gameCount = strikeBallCount;
  }

  setResult() {
    const { strike, ball } = this.gameCount;
    const ballMessage = `${ball}${message.BALL}`;
    const strikeMessage = `${strike}${message.STRIKE}`;

    if (ball === 0 && strike === 0) {
      this.result = message.NOTHING;
      return;
    }

    if (ball > 0 && strike === 0) {
      this.result = ballMessage;
      return;
    }

    if (ball === 0 && strike > 0) {
      this.result = strikeMessage;
      return;
    }

    this.result = `${ballMessage} ${strikeMessage}`;
  }

  readRestartInput() {
    Console.readLine(message.FINISH, (input) => {
      if (input === '1') {
        this.play();
      }

      if (input === '2') {
        Console.close();
      }
    });
  }
}

module.exports = App;
