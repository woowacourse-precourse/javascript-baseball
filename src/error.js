module.exports = class ErrorClass {
  throwError() {
    throw new Error("잘못된 값을 입력하셨습니다.");
  }

  inputNumberSizeCheck(INPUT_USER_NUMBER) {
    if (INPUT_USER_NUMBER.length !== 3) {
      return true;
    }
    return false;
  }

  overlapNumberCheck(INPUT_USER_NUMBER) {
    const overLapNumberSet = new Set(INPUT_USER_NUMBER);
    if (overLapNumberSet.size !== 3) {
      return true;
    }
    return false;
  }
  numberTypeCheck(INPUT_USER_NUMBER) {
    const numberTypeString = INPUT_USER_NUMBER;
    for (let letter of numberTypeString) {
      if (typeof parseInt(letter, 10) !== "number") {
        return true;
      }
    }
    return false;
  }
  zeroCheck(INPUT_USER_NUMBER) {
    for (let letter of INPUT_USER_NUMBER) {
      if (parseInt(letter, 10) === 0) {
        return true;
      }
    }
    return false;
  }

  spaceCheck(INPUT_USER_NUMBER) {
    for (let letter of INPUT_USER_NUMBER) {
      if (isNaN(parseInt(letter, 10))) {
        return true;
      }
    }
    return false;
  }

  errorCheck(number) {
    if (
      this.inputNumberSizeCheck(number) ||
      this.overlapNumberCheck(number) ||
      this.numberTypeCheck(number) ||
      this.zeroCheck(number) ||
      this.spaceCheck(number)
    ) {
      return this.throwError();
    }
    return false;
  }
};
