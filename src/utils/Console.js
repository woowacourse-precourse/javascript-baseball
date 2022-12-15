const MissionUtils = require('@woowacourse/mission-utils');

const console = {
  print(message) {
    MissionUtils.Console.print(message);
  },

  readline(message, cbFunc) {
    MissionUtils.Console.readLine(message, cbFunc);
  },

  close() {
    MissionUtils.Console.close();
  },
};

module.exports = console;
