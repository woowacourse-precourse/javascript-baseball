const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    let a;
    a = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3);
    console.log(a);
  }
}

const app = new App();
app.play();

module.exports = App;
