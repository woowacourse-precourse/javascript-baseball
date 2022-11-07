const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("./Game");
//3개 랜덤 숫자 만들기

class Computer {
  makeRandomNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      Game.NUMBER.START,
      Game.NUMBER.END,
      Game.NUMBER.LENGTH
    );
  }
}

module.exports = Computer;
