const { pickNumberInRange } = require("./utils");

class ComputerModel {
  getNumberFromComputer() {
    this.computerNumberSpace = new Set();
    this.setNumberIntoSpace(this.computerNumberSpace);
    return [...this.computerNumberSpace];
  }

  setNumberIntoSpace(computerSpace) {
    while (this.isSpaceNotFull(computerSpace)) {
      computerSpace.add(this.getRandomNumberInRange(1, 9));
    }
    return computerSpace; // 테스트코드용 리턴
  }

  getRandomNumberInRange(start, end) {
    return pickNumberInRange(start, end);
  }

  isNumberNotInSpace(number, space) {
    return !space.includes(number);
  }

  isSpaceNotFull(space) {
    return space.size < 3;
  }
}
module.exports = ComputerModel;
