const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");

class User {
  readAnswer(query, callback) {
    MissionUtils.Console.readLine(query, (answer) => {
      callback(Validator.answer(answer));
    });
  }
}

module.exports = User;
