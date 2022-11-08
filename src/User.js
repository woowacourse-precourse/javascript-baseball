const MissionUtils = require('@woowacourse/mission-utils');
const Exception = require('./Exception');
class User {
  readAnswer(message, action) {
    MissionUtils.Console.readLine(message, (answer) => {
      action(Exception.answer(answer));
    });
  }
  wantRestart(message, action) {
    MissionUtils.Console.readLine(message, (answer) => {
      action(Exception.restart(answer));
    });
  }
}

module.exports = User;
