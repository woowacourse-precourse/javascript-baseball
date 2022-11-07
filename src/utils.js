const MissionUtils = require("@woowacourse/mission-utils");

const utils = {
  readLine(message, callback) {
    MissionUtils.Console.readLine(message, callback);
  },
  print(message) {
    MissionUtils.Console.print(message);
  },
  close() {
    MissionUtils.Console.close();
  },
  pickNumberInRange(start, end) {
    return MissionUtils.Random.pickNumberInRange(start, end);
  },
};

module.exports = utils;
