const MissionUtils = require("@woowacourse/mission-utils");
class App {
  makeRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  play() {
    let randomNumber = this.makeRandomNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
