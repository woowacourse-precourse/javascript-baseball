const { Console } = require('@woowacourse/mission-utils');
const { RULE, GAME_MESSAGE, ERROR_MESSAGE } = require('./constants/baseball');

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
    Console.print(GAME_MESSAGE.START);
    this.readUserInput();
  }

  readUserInput() {
    Console.readLine(GAME_MESSAGE.INPUT, (number) => {
      this.#user.setNumbers(number);
      this.#setBallStrikeCount();

      const countMessage = BaseballHelper.getCountMessage(this.#ballStrikeCount);
      Console.print(this.#computer.numbers);
      Console.print(countMessage);

      if (this.#ballStrikeCount.strike === 3) {
        Console.print(GAME_MESSAGE.CORRECT);
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
    Console.readLine(GAME_MESSAGE.FINISH, (input) => {
      if (input === RULE.RESTART) {
        this.play();
        return;
      }

      if (input === RULE.END) {
        Console.close();
        return;
      }

      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    });
  }
}

module.exports = App;
