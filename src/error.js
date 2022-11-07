module.exports = class ErrorClass {
  constructor() {
    this.errorState = false;
  }
  throwError() {
    throw new Error("잘못된 값을 입력하셨습니다.");
  }

  inputNumberSizeCheck(INPUT_USER_NUMBER) {
    return INPUT_USER_NUMBER.length !== 3
      ? (this.errorState = true)
      : this.errorState;
  }

  overlapNumberCheck(INPUT_USER_NUMBER) {
    const overLapNumberSet = new Set(INPUT_USER_NUMBER);
    return overLapNumberSet.size !== 3
      ? (this.errorState = true)
      : this.errorState;
  }

  numberTypeCheck(INPUT_USER_NUMBER) {
    const numberTypeString = INPUT_USER_NUMBER;
    for (const LETTER of numberTypeString) {
      if (typeof parseInt(LETTER, 10) !== "number") {
        return (this.errorState = true);
      }
    }
    return this.errorState;
  }
  zeroCheck(INPUT_USER_NUMBER) {
    for (const LETTER of INPUT_USER_NUMBER) {
      if (parseInt(LETTER, 10) === 0) {
        return (this.errorState = true);
      }
    }
    return this.errorState;
  }

  spaceCheck(INPUT_USER_NUMBER) {
    for (const LETTER of INPUT_USER_NUMBER) {
      if (isNaN(parseInt(LETTER, 10))) {
        return (this.errorState = true);
      }
    }
    return this.errorState;
  }

  errorCheck(number) {
    this.inputNumberSizeCheck(number);
    this.overlapNumberCheck(number);
    this.numberTypeCheck(number);
    this.zeroCheck(number);
    this.spaceCheck(number);
    return this.errorState ? this.throwError() : false;
  }
};
