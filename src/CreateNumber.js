const MissionUtils = require("@woowacourse/mission-utils");

class CreateNumber {
 pickedComputerNumber() {
    let pickNumber = [];
    while (pickNumber.length < 3) {
      let computerNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!pickNumber.includes(computerNumber)){
        pickNumber.push(computerNumber);
    }
  }
  return pickNumber.join("");
  }
}

module.exports = CreateNumber;