const { Random, Console } = require('@woowacourse/mission-utils');
const { message, rule } = require('./constants');
const isValidUserNumbers = require('./utils/validate');

class App {
  constructor() {
    this.computerNumbers = [];
    this.userNumbers = [];
    this.ballStrikeCount = {
      ball: 0,
      strike: 0,
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

      if (!isValidUserNumbers(this.userNumbers)) {
        throw new Error('유효하지 않은 값을 입력했습니다.');
      }

      this.setBallStrikeCount();
      this.setResult();
      Console.print(this.computerNumbers);
      Console.print(this.result);

      if (this.ballStrikeCount.strike === 3) {
        Console.print(message.CORRECT);
        this.readRestartInput();
      }

      this.readUserInput();
    });
  }

  setBallStrikeCount() {
    const ballStrikeCount = {
      ball: 0,
      strike: 0,
    };

    this.userNumbers.forEach((number, i) => {
      if (number === this.computerNumbers[i]) {
        ballStrikeCount.strike += 1;
        return;
      }

      if (this.computerNumbers.includes(number)) {
        ballStrikeCount.ball += 1;
      }
    });

    this.ballStrikeCount = ballStrikeCount;
  }

  setResult() {
    const { ball, strike } = this.ballStrikeCount;
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
        return;
      }

      if (input === '2') {
        Console.close();
        return;
      }

      throw new Error('유효하지 않은 값을 입력했습니다.');
    });
  }
}

module.exports = App;
