const MissionUtils = require("@woowacourse/mission-utils");

function pickedComputerNumber() {
    let pickNumber = [];
    while (pickNumber.length < 3) {
      const computerNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!pickNumber.includes(computerNumber)){
        pickNumber.push(computerNumber);
    }
  }
  return pickNumber.join("");
}
module.exports = pickedComputerNumber;