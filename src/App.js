class App {
  #isStart = false;

  #isFinish = false;

  isStart() {
    return this.#isStart;
  }

  isFinish() {
    return this.#isFinish;
  }
}

module.exports = App;
