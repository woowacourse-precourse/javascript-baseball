class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");

    function makeAnswer() {
      const THREE_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
      const ANSWER = THREE_NUMBERS[0] * 100 + THREE_NUMBERS[1] * 10 + THREE_NUMBERS[2] * 1;
      return ANSWER;
    }

  }
}
const app = new App();
app.play();
module.exports = App;
