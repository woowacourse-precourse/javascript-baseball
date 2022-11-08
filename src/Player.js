const MissionUtils = require("@woowacourse/mission-utils");
const { SYS_MESSAGE } = require("./Constant.js");

class Player {
  getNumber() {
    let userInput = "";
    MissionUtils.Console.readLine(SYS_MESSAGE.INPUT_MESSAGE, (input) => {
      userInput = input;
      MissionUtils.Console.close();
    });
    return userInput;
  }
}

module.exports = Player;
