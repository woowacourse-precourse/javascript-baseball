const { Console } = require('@woowacourse/mission-utils');
const { RULE, GAME_MESSAGE, ERROR_MESSAGE } = require('./constants/baseball');

const BaseballComputer = require('./models/BaseballComputer');
const BaseballUser = require('./models/BaseballUser');
const BaseballHelper = require('./utils/helper');

class App {
  #computer;

  #user;

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
    Console.readLine(GAME_MESSAGE.INPUT, this.#progress.bind(this));
  }

  #progress(number) {
    this.#user.setNumbers(number);

    const computerNumbers = this.#computer.numbers;
    const userNumbers = this.#user.numbers;

    const ballStrikeCount = BaseballHelper.calculateBallStrikeCount(computerNumbers, userNumbers);
    const countMessage = BaseballHelper.getCountMessage(ballStrikeCount);

    Console.print(this.#computer.numbers);
    Console.print(countMessage);

    if (ballStrikeCount.strike === RULE.LENGTH) {
      Console.print(GAME_MESSAGE.CORRECT);
      this.readRestartInput();
    }

    this.readUserInput();
  }

  readRestartInput() {
    Console.readLine(GAME_MESSAGE.FINISH, this.#selectRestartOrEnd.bind(this));
  }

  #selectRestartOrEnd(input) {
    if (input === RULE.RESTART) {
      this.play();
      return;
    }

    if (input === RULE.END) {
      Console.close();
      return;
    }

    throw new Error(ERROR_MESSAGE.INVALID_INPUT);
  }
}

module.exports = App;
