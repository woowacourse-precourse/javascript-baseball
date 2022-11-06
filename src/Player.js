const MissionUtils = require("@woowacourse/mission-utils");
const { SYS_MESSAGE } = require("./Constant.js");

class Player {
  getNumber() {
    MissionUtils.Console.readLine(SYS_MESSAGE.INPUT_MESSAGE, (answer) => {
      MissionUtils.Console.close();
      return Number(answer);
    });
  }
}

module.exports = Player;
