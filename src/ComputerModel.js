const MissionUtils = require("@woowacourse/mission-utils");

class ComputerModel {
  getNumberFromComputer() {
    this.computerNumberSpace = [];
    this.setNumberIntoSpace(this.computerNumberSpace);
    return this.computerNumberSpace;
  }

  setNumberIntoSpace(computerSpace) {
    const numberFromComputer = () => this.getRandomNumberInRange(1, 9);
    const InsertNumberToSpace = (number, space) => {
      if (this.isNumberNotInSpace(number, space)) {
        space.push(number);
      }
      return space;
    };

    while (this.isSpaceNotFull(computerSpace)) {
      InsertNumberToSpace(numberFromComputer(), computerSpace);
    }
  }

  getRandomNumberInRange(start, end) {
    return MissionUtils.Random.pickNumberInRange(start, end);
  }

  isNumberNotInSpace(number, space) {
    return !space.includes(number);
  }

  isSpaceNotFull(space) {
    return space.length < 3;
  }
}
module.exports = ComputerModel;
