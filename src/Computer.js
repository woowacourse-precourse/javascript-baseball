const MissionUtils = require("@woowacourse/mission-utils");
const { NUMBER } = require("./Game");
//3개 랜덤 숫자 만들기

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
