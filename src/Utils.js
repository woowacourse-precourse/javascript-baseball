const MissionUtils = require("@woowacourse/mission-utils");

const utils = {
  print(msg) {
    MissionUtils.Console.print(msg);
  },

  close() {
    MissionUtils.Console.Close();
  },

  readLine(question, callback) {
    MissionUtils.Console.readLine(question, callback);
  },

  pickNumberInRange(startInclusive, endInclusive) {
    return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
  },
};

module.exports = utils;