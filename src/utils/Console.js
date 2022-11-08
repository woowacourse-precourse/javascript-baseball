const MissionUtils = require('@woowacourse/mission-utils');

class Console {
  static print(msg) {
    MissionUtils.Console.print(msg);
  }

  static readline(question, answer) {
    MissionUtils.Console.readLine(question, answer);
  }

  static close() {
    MissionUtils.Console.close();
  }
}

module.exports = Console;
