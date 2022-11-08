const MissionUtils = require("@woowacourse/mission-utils");
const Exception = require("./Exception");
class User {
  readAnswer(query, callback) {
    MissionUtils.Console.readLine(query, (answer) => {
      callback(Exception.answer(answer));
    });
  }
}

module.exports = User;