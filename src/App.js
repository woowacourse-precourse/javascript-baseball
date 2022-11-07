const MissionUtils = require('@woowacourse/mission-utils');

const Message = require('./Message');
const Random = require('./Random');
const Game = require('./Game');

const { close } = MissionUtils.Console;

class App {
  #isStart = false;

  #isFinish = false;

  #computerInput = [];

  #random = new Random();

  #mesage = new Message();

  #game = new Game();

  isStart() {
    return this.#isStart;
  }

  isFinish() {
    return this.#isFinish;
  }

  init() {
    const threeRandomArray = this.#random.getThreeRandomArray();

    this.#mesage.print(Message.start());
    this.#computerInput = threeRandomArray;
    this.#isStart = true;

    return threeRandomArray;
  }

  isStrike(strike) {
    const STRIKE = 3;

    if (strike === STRIKE) {
      this.#mesage.print(Message.end());
      this.#isFinish = true;

      return true;
    }

    return false;
  }

  userInteraction(userInputArray, computerInputArray) {
    const [ball, strike] = this.#game.calculate(userInputArray, computerInputArray);

    this.#mesage.print(Message.count(ball, strike));
    this.isStrike(strike);

    if (!this.isFinish()) {
      this.play();
    }

    return [ball, strike];
  }

  userConfirm(confirmNumber) {
    const ONE = 1;
    const TWO = 2;

    switch (confirmNumber) {
      case ONE: {
        this.#isStart = false;
        this.#isFinish = false;

        this.play();

        break;
      }

      case TWO: {
        this.#mesage.print('게임 종료');
        close();

        break;
      }

      default: {
        throw new Error('잘못된 입력을 하였습니다.');
      }
    }
  }
}

module.exports = App;
