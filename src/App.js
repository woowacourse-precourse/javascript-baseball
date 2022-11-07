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
    Console.print(GAME_MESSAGE.START);
    this.#computer.setDigits();
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

    Console.print(countMessage);

    if (ballStrikeCount.strike === RULE.LENGTH) {
      Console.print(GAME_MESSAGE.CORRECT);
      this.#readRestartOrEndInput();
      return;
    }

    this.#readUserNumber();
  }

  #readRestartOrEndInput() {
    Console.readLine(GAME_MESSAGE.RESTART_OR_END, this.#selectRestartOrEnd.bind(this));
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
