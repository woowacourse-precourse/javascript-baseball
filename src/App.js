const { Console } = require('@woowacourse/mission-utils');
const { RULE, GAME_MESSAGE, ERROR_MESSAGE } = require('./constants/baseball');

const BaseballComputer = require('./models/BaseballComputer');
const BaseballUser = require('./models/BaseballUser');
const BaseballUtils = require('./utils/baseball');

class App {
  #computer;

  #user;

  constructor() {
    this.#computer = new BaseballComputer();
    this.#user = new BaseballUser();
  }

  play() {
    this.#computer.setDigits();
    Console.print(GAME_MESSAGE.START);
    this.#readUserNumber();
  }

  #readUserNumber() {
    Console.readLine(GAME_MESSAGE.INPUT, this.#progress.bind(this));
  }

  #progress(number) {
    this.#user.setDigits(number);

    const computerDigits = this.#computer.digits;
    const userDigits = this.#user.digits;

    const ballStrikeCount = BaseballUtils.countBallAndStrike(computerDigits, userDigits);
    const countMessage = BaseballUtils.getCountMessage(ballStrikeCount);

    Console.print(this.#computer.digits);
    Console.print(countMessage);

    if (ballStrikeCount.strike === RULE.LENGTH) {
      Console.print(GAME_MESSAGE.CORRECT);
      this.#readRestartInput();
    }

    this.#readUserNumber();
  }

  #readRestartInput() {
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
