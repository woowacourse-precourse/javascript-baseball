const Message = require('./Message');
const Random = require('./Random');

class App {
  #isStart = false;

  #isFinish = false;

  #computerInput = [];

  #random = new Random();

  #mesage = new Message();

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
}

module.exports = App;
