const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]));
  }
}

const app = new App();

app.play();

module.exports = App;
