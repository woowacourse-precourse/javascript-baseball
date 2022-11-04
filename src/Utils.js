const MissionUtils = require("@woowacourse/mission-utils");

const utils = {
  print(message) {
    MissionUtils.Console.print(message);
  },
  readLine(question) {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(question, (answer) => {
        resolve(answer);
      });
    });
  },
  pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      startInclusive,
      endInclusive,
      count,
    );
  },
  closeIO() {
    MissionUtils.Console.close();
  },
};

module.exports = utils;
