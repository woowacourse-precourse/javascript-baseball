class Validation {
  constructor(userInput) {
    this.userInput = userInput;
  }
  isValidInput() {
    return (
      this.isInputTypeNumber() &&
      this.checkInputLength() &&
      this.checkNotIncludeZero() &&
      this.isNonDuplicateNumber()
    );
  }

  isInputTypeNumber() {
    const inputToNumber = Number(this.userInput);
    if (Number.isNaN(inputToNumber))
      throw new Error("숫자가 아닌 값이 입력되었습니다. 게임 종료");
    return true;
  }

  checkInputLength() {
    if (this.userInput.length !== 3)
      throw new Error("입력값은 세자리 숫자입니다. 게임 종료");
    return true;
  }

  checkNotIncludeZero() {
    if (this.userInput.includes("0"))
      throw new Error("입력값에 0을 포함할 수 없습니다. 게임 종료");
    return true;
  }

  isNonDuplicateNumber() {
    const numberSet = new Set(this.userInput);
    if (numberSet.size !== 3)
      throw new Error("중복된 숫자가 있습니다. 게임 종료");
    return true;
  }
}

module.exports = Validation;
