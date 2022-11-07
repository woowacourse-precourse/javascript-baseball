const Message = require('./Message');
const Random = require('./Random');
const Game = require('./Game');

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
}

module.exports = App;
