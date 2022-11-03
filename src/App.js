const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    ComputerNumber();
  }
}

const ComputerNumber = ()=>{
  const NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1,9,3);
  return NUMBER;
}
module.exports = App;
