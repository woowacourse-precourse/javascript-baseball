const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    ComputerNumber()
  }
}


const ComputerNumber = ()=>{
  const NUMBER = String(MissionUtils.Random.pickUniqueNumbersInRange(1,9,3));
  return NUMBER.split(",");
}
module.exports = App;