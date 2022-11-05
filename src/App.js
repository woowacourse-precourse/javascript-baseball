const MissionUtils = require("@woowacourse/mission-utils");
const System = require("./System");
const User = require("./User");
class App {
  play() {
    const system = new System();
    const user = new User();

    system.getStarted();
    system.chooseNumber();
    user.responseSendNumber(system);

    // MissionUtils.Console.close();
  }
}

App.prototype.play();

module.exports = App;
