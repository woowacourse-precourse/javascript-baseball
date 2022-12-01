const MissionUtils = require('@woowacourse/mission-utils');
const Computer = require('../Model/Computer');
const { generate } = require('../Utils/RandomNumberGenerator');
const { askRestartOrEnd } = require('../View/InputView');
const { startView, resultCompare, gameOverWithSuccess } = require('../View/OutputView');

class BaseballGame {
  #computer;

  #user;

  constructor(computer, user) {
    this.#computer = computer;
    this.#user = user;
  }

  run() {
    startView();
    return this.#user.inputNumber(this);
  }

  restart() {
    this.#computer = new Computer(generate);
    return this.#user.inputNumber(this);
  }

  end() {
    return MissionUtils.Console.close();
  }

  getResult() {
    let ball = 0;
    let strike = 0;
    const computerArray = this.#computer.number;
    const userArray = this.#user.number;
    userArray.forEach((el, idx) => {
      if (computerArray.includes(el)) {
        if (computerArray[idx] === el) strike++;
        else ball++;
      }
    });
    return [ball, strike];
  }

  compareNumber() {
    const [ball, strike] = this.getResult();
    resultCompare(ball, strike);
    if (strike === 3) {
      gameOverWithSuccess();
      return askRestartOrEnd(this);
    }
    this.#user.inputNumber(this);
  }

  restartOrEnd(number) {
    if (number === '1') {
      return this.restart();
    } else if (number === '2') {
      return this.end();
    }
    throw '[ERROR] 1 또는 2를 입력하세요';
  }
}

module.exports = BaseballGame;

