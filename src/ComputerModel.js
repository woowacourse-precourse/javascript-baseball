const { MissionUtils } = require("@woowacourse/mission-utils");

class ComputerModel {
  constructor() {
    this.computerNumberSpace = [];
  }

  getNumberFromComputer() {
    return this.computerNumberSpace;
  }

  setNumberIntoSpace = (computerNumberSpace) => {
    const numberFromComputer = this.getRandomNumberInRange(1, 9);
    const InsertNumberToSpace = (number, space) => {
      if (this.isNumberNotInSpace(number, computerNumberSpace)) {
        space.push(number);
      }
    };

    while (this.isSpaceFull(this.computerNumberSpace)) {
      InsertNumberToSpace(numberFromComputer, this.computerNumberSpace);
    }
  };

  getRandomNumberInRange(start, end) {
    return MissionUtils.Random.pickNumberInRange(start, end);
  }

  isNumberNotInSpace(number, space) {
    return !space.includes(number);
  }

  isSpaceFull(space) {
    return space.length < 3;
  }
}
module.exports = ComputerModel;
