class Condition {
  static isValidInput(input) {
    if (!this.isLengthThree(input))
      throw new Error("3자리 숫자를 입력해주세요.");

    const numArr = input.split("").map(Number);
    if (!this.isAllNum(numArr) || !this.isAllValidNum(numArr)) return;

    const numSet = [...new Set(numArr)];
    if (numSet.length !== 3)
      throw new Error("중복되지 않는 서로 다른 숫자 3개를 입력해주세요.");

    return true;
  }

  static isAllNum(numArr) {
    return numArr.every((num) => this.checkNum(num));
  }

  static isAllValidNum(numArr) {
    return numArr.every((num) => this.checkZero(num));
  }

  static isLengthThree(input) {
    return input.length === 3;
  }

  static checkNum(number) {
    if (isNaN(number)) throw new Error("숫자를 입력해주세요.");
    return true;
  }

  static checkZero(number) {
    if (number === 0)
      throw new Error("1 ~ 9 사이의 숫자만 입력할 수 있습니다.");
    return true;
  }

  static checkOneOrTwo(input) {
    if (input !== "1" && input !== "2")
      throw new Error("1 또는 2를 입력해야 합니다.");
  }
}

module.exports = Condition;
