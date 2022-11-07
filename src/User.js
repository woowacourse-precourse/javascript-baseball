const MissionUtils = require("@woowacourse/mission-utils");

class User {
  readAnswer(query, callback) {
    MissionUtils.Console.readLine(query, (answer) => {
      callback(answer);
    });
  }
}

module.exports = User;
