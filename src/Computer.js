const MissionUtils = require("@woowacourse/mission-utils");
const { NUMBER } = require("./Game");

class Computer {
  makeRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      NUMBER.START,
      NUMBER.END,
      NUMBER.LENGTH
    );
  }
}

module.exports = Computer;
