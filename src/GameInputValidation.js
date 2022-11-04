const print = require("./utils/print");

module.exports = class GameInputValidation {
  constructor(gameInput) {
    this.gameInput = gameInput;
  }

  validation() {
    try {
      this.checkLength();
      this.checkNumber();
      this.checkDuplicate();
    } catch (e) {
      print(e);
      return 1;
    }
    return 0;
  }

  checkLength() {
    if (this.gameInput.length != 3) {
      throw new Error("입력은 3자리만 가능합니다.");
    }
  }

  checkNumber() {
    if (this.gameInput != Number(this.gameInput)) {
      throw new Error("입력은 숫자만 가능합니다.");
    }
  }

  checkDuplicate() {
    const duplicateChecker = new Set();
    for (let x = 0; x < this.gameInput.length; x++) {
      if (duplicateChecker.has(this.gameInput[x])) {
        throw new Error("입력 숫자가 중복되었습니다.");
      }
      duplicateChecker.add(this.gameInput[x]);
    }
  }
};
