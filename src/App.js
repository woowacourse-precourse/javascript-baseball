const MissionUtils = require("@woowacourse/mission-utils");

function randomComputerNum(){
  const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return number;
}

class App {
  play() {}
}

module.exports = App;
