module.exports = class GameInputValidation {
  constructor(gameInput) {
    this.gameInput = gameInput;
  }
  validation() {
    this.checkLength();
  }
  checkLength() {
    if (this.gameInput.length != 3) {
      throw new Error("입력은 3자리만 가능합니다.");
    }
  }
};
