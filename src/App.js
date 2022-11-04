const MissionUtils = require("@woowacourse/mission-utils");
const System = require("./System");
const User = require("./User");
class App {
  play() {
    System.prototype.getStarted();
    System.prototype.chooseNumber();
    System.prototype.requestEnterNumbers();
    const guessNumber = User.prototype.responseSendNumber();
    // MissionUtils.Console.close();
  }
}

App.prototype.play();

module.exports = App;
