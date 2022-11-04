const MissionUtils = require("@woowacourse/mission-utils");
const System = require("./System");
const User = require("./User");
class App {
  play() {
    System.prototype.getStarted();
    System.prototype.chooseNumber();
    System.prototype.requestEnterNumbers();
    User.prototype.responseSendNumber();

    // MissionUtils.Console.close();
  }
}

App.prototype.play();

module.exports = App;
