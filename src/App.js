const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor() {
    this.answer = []
  }

  play() {}

  createAnswer() {
    while (this.answer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }
}

const baseBallGame = new App;
baseBallGame.play();

module.exports = App;
