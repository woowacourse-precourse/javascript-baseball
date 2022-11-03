module.exports = class GameInputValidation {
  constructor(GameInput) {
    this.GameInput = GameInput;
  }
  validation() {
    this.checkLength();
  }
  checkLength() {
    if (this.GameInput.length != 3) {
      throw new Error("입력은 3자리만 가능합니다.");
    }
  }
};
