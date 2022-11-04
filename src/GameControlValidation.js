const { MissionUtils } = require("@woowacourse/mission-utils");
const print = require("./utils/print");

module.exports = class GameControlValidation {
  constructor(controlInput) {
    this.controlInput = controlInput;
  }

  validation() {
    try {
      this.checkOneOrTwo();
    } catch (e) {
      print(e);
      return 1;
    }
  }

  checkOneOrTwo() {
    if (this.controlInput != 1 && this.controlInput != 2) {
      throw new Error("1 또는 2만 입력할 수 있습니다.");
    }
  }
};
