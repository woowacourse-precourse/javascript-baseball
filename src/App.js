const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
  print(message) {
    MissionUtils.Console.print(message);
  }
}
const app = new App();
app.play();

module.exports = App;
