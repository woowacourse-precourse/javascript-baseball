const { pickNumberInRange } = require("./utils");

class ComputerModel {
  getNumberFromComputer() {
    this.computerNumberSpace = new Set();
    this.setNumberIntoSpace(this.computerNumberSpace);
    return [...this.computerNumberSpace];
  }

  setNumberIntoSpace(computerSpace) {
    const numberFromComputer = () => this.getRandomNumberInRange(1, 9);
    const InsertNumberToSpace = (number, space) => {
      space.add(number);
    };

    while (this.isSpaceNotFull(computerSpace)) {
      InsertNumberToSpace(numberFromComputer(), computerSpace);
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
