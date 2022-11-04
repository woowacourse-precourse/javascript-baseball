const MissionUtils = require("@woowacourse/mission-utils");
const System = require("./System");
class App {
  play() {
    System.prototype.getStarted();
    System.prototype.chooseNumber();
    System.prototype.requestEnterNumbers();
    MissionUtils.Console.close();
  }
}

App.prototype.play();

module.exports = App;
