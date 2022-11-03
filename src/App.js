const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const DEF_NUM = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
    console.log(DEF_NUM);
  }
}
const app = new App();
app.play();

module.exports = App;
