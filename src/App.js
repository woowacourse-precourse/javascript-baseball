class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));
  }
}
const app = new App();
app.play();
module.exports = App;
