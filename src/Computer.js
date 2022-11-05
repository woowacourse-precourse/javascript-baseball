const MissionUtils = require("@woowacourse/mission-utils");

class Computer {
  constructor() {
    this.numbers = this.settingComputerNums();
  }

  settingComputerNums() {
    let computerNumbers = [];
    while (computerNumbers.length < 3) {
      computerNumbers.push(this.createNewNum(computerNumbers));
    }

    return computerNumbers;
  }

  createNewNum(computerNumbers) {
    const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);

    return this.numberDuplicationCheck(computerNumbers, newNumber)
      ? this.createNewNum(computerNumbers)
      : newNumber;
  }

  numberDuplicationCheck(computerNumbers, newNumber) {
    return computerNumbers.includes(newNumber);
  }
}

module.exports = Computer;
