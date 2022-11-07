const { END_NOTICE } = require("./Console");

class Input {
  isValidInput(input) {
    if (this.isLengthThree(input))
      throw new Error("3자리 숫자를 입력해주세요.");
    const numArr = input.split("").map(Number);
    if (!this.isAllNum(numArr) || !this.isAllValidNum(numArr)) return;
  }

  isAllNum(numArr) {
    return numArr.every((num) => this.checkNum(num));
  }

  isAllValidNum(numArr) {
    return numArr.every((num) => this.checkZero(num));
  }

  isLengthThree(input) {
    return input.length === 3;
  }

  checkNum(number) {
    if (isNaN(number)) throw new Error("숫자를 입력해주세요.");
    return true;
  }

  checkZero(number) {
    if (number === 0)
      throw new Error("1 ~ 9 사이의 숫자만 입력할 수 있습니다.");
    return true;
  }

  checkOneOrTwo(input) {
    if (input !== "1" && input !== "2") throw new Error(END_NOTICE);
  }
}

module.exports = Input;
