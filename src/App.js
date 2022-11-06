const { Console } = require('@woowacourse/mission-utils');
const { message } = require('./constants');

const BaseballComputer = require('./models/BaseballComputer');
const BaseballUser = require('./models/BaseballUser');
const BaseballHelper = require('./utils/helper');

class App {
  #computer;

  #user;

  #ballStrikeCount;

  constructor() {
    this.#computer = new BaseballComputer();
    this.#user = new BaseballUser();
  }

  play() {
    this.#computer.setNumbers();
    Console.print(message.START);
    this.readUserInput();
  }

  readUserInput() {
    Console.readLine(message.INPUT, (number) => {
      this.#user.setNumbers(number);
      this.#setBallStrikeCount();

      const countMessage = BaseballHelper.getCountMessage(this.#ballStrikeCount);
      Console.print(this.#computer.numbers);
      Console.print(countMessage);

      if (this.#ballStrikeCount.strike === 3) {
        Console.print(message.CORRECT);
        this.readRestartInput();
      }

      this.readUserInput();
    });
  }

  #setBallStrikeCount() {
    const computerNumbers = this.#computer.numbers;
    const userNumbers = this.#user.numbers;

    const ballStrikeCount = BaseballHelper.calculateBallStrikeCount(computerNumbers, userNumbers);

    this.#ballStrikeCount = ballStrikeCount;
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
