const ToolsClass = require("./tools");

module.exports = class ErrorClass {
  constructor() {
    this.tools = new ToolsClass();
    this.errorState = false;
  }
  throwError() {
    throw new Error("잘못된 값을 입력하셨습니다.");
  }

  inputNumberSizeCheck(splitNumberArray) {
    if (splitNumberArray.length !== 3) {
      this.errorState = true;
    }
    return this;
  }

  overlapNumberCheck(INPUT_USER_NUMBER) {
    const overLapNumberSet = new Set(INPUT_USER_NUMBER);
    if (overLapNumberSet.size !== 3) {
      this.errorState = true;
    }
    return this;
  }

  numberTypeCheck(splitNumberArray) {
    splitNumberArray.forEach((letter) => {
      if (isNaN(letter)) {
        this.errorState = true;
      }
    });
    return this;
  }
  zeroCheck(splitNumberArray) {
    splitNumberArray.forEach((letter) => {
      if (parseInt(letter, 10) === 0) {
        this.errorState = true;
      }
    });
    return this;
  }

  spaceCheck(splitNumberArray) {
    splitNumberArray.forEach((letter) => {
      if (isNaN(parseInt(letter, 10))) {
        this.errorState = true;
      }
    });
    return this;
  }

  errorCheck(numberString) {
    const SPLIT_NUMBER = this.tools.splitArray(numberString);
    this.inputNumberSizeCheck(SPLIT_NUMBER);
    this.overlapNumberCheck(SPLIT_NUMBER);
    this.numberTypeCheck(SPLIT_NUMBER);
    this.zeroCheck(SPLIT_NUMBER);
    this.spaceCheck(SPLIT_NUMBER);
    return this.errorState ? this.throwError() : false;
  }
};
