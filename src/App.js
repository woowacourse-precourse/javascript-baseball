const MissionUtils = require("@woowacourse/mission-utils");
function computerNumbers(){
  const COMPUTER_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return COMPUTER_NUMBERS
}

class App {
  play() {}
}

module.exports = App;
