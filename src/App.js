const MissionUtils = require("@woowacourse/mission-utils");
const { SYS_MESSAGE } = require("./Constant.js");

class App {
  alertStart() {
    MissionUtils.Console.print(SYS_MESSAGE.START_MESSAGE);
  }
}

module.exports = App;
