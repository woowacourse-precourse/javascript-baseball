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
    const NEW_NUMBER = MissionUtils.Random.pickNumberInRange(1, 9);

    return this.numberDuplicationCheck(computerNumbers, NEW_NUMBER)
      ? this.createNewNum(computerNumbers)
      : NEW_NUMBER;
  }

  numberDuplicationCheck(computerNumbers, newNumber) {
    return computerNumbers.includes(newNumber);
  }
}

module.exports = Computer;
