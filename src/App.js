const MissonUtils = require("@woowacourse/mission-utils");

class App {
  #RANDOM_NUM_LENGTH = 3;
  #randomNum = [];

  createRandomNum() {
    Array.from({ length: this.#RANDOM_NUM_LENGTH }).forEach(
      () =>
        (this.#randomNum = [
          ...this.#randomNum,
          MissonUtils.Random.pickNumberInRange(1, 9),
        ])
    );
  }

  play() {}
}

const app = new App();

app.createRandomNum();

module.exports = App;
