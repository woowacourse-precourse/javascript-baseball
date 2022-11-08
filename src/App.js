const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, ERRORS } = require("./constants.js");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.answer = {};
  }

  play() {
    Console.print(MESSAGES.APP_START);
    game();
  }

  game() {
    this.answer = this.setAnswer();
  }

  setAnswer() {
    return Random.pickUniqueNumbersInRange(1, 9, 3).reduce((acc, cur, idx) => {
      acc[cur] = idx + 1;
      return acc;
    }, {});
  }
}

module.exports = App;
const app = new App();
app.play();
