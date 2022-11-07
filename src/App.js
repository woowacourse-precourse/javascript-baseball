const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  getRandomValue() {
    return Random.pickNumberInRange(1, 9);
  }

  play() {}
}

const app = new App();
app.play();

module.exports = App;
