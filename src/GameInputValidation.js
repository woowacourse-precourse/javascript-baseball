class GameInputValidation {
  
  constructor(GameInput) {
    this.GameInput = GameInput;
  }

  checkLength() {
    if (this.GameInput.length != 3) {
      throw new Error("입력은 3자리만 가능합니다.");
    }
    return true;
  }

}
