const {Random} = require("@woowacourse/mission-utils");

class CreateNumber {
  constructor(){
    this.pickNumber = [];
  }
 pickedComputerNumber() {
    while (this.pickNumber.length < 3) {
      let computerNumber = Random.pickNumberInRange(1, 9);
      if (!this.pickNumber.includes(computerNumber)){
        this.pickNumber.push(computerNumber);
    }
  }
  }
}

module.exports = CreateNumber;