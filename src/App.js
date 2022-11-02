class App {
  play() {
    const computerNumber = isComputerNumber();
  }
}
function isComputerNumber(){
  const MissionUtils = require("@woowacourse/mission-utils");
  const computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  return computerNumbers;
}
module.exports = App;