const { Console } = require('@woowacourse/mission-utils');
const { message } = require('./constants');

const BaseballComputer = require('./models/BaseballComputer');
const isValidUserNumbers = require('./utils/validate');

class App {
  #computer;

  constructor() {
    this.userNumbers = [];
    this.ballStrikeCount = {
      ball: 0,
      strike: 0,
    };
    this.result = '';
  }

  play() {
    this.#computer = new BaseballComputer();
    Console.print(message.START);
    this.readUserInput();
  }

  readUserInput() {
    Console.readLine(message.INPUT, (number) => {
      this.userNumbers = [...number];

      if (!isValidUserNumbers(this.userNumbers)) {
        throw new Error('유효하지 않은 값을 입력했습니다.');
      }

      this.setBallStrikeCount();
      this.setResult();
      Console.print(this.#computer.numbers);
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
      if (number === this.#computer.numbers[i]) {
        ballStrikeCount.strike += 1;
        return;
      }

      if (this.#computer.numbers.includes(number)) {
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
