const MissionUtils = require("@woowacourse/mission-utils");

class User {
  responseSendNumber() {
    MissionUtils.Console.readLine("", (answer) => {
      let number = answer.split("");
      return number;
    });
  }
}

User.prototype.responseSendNumber();

module.exports = User;
