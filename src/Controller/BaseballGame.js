const MissionUtils = require('@woowacourse/mission-utils');
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
    this.#user.inputNumber(this);
  }

  getResult() {
    let ball = 0;
    let strike = 0;
    const computerArray = this.#computer.number;
    const userArray = this.#user.number;
    console.log(computerArray, userArray);
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
      return MissionUtils.Console.close();
    }
    this.#user.inputNumber(this);
  }

  restartOrEnd() {}
}

module.exports = BaseballGame;

