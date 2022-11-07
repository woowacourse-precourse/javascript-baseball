// 사용자 input 검증
class Validation {
  constructor() {
    this.numberRangeRegex = /^\d+$/;
    this.isUserGuessInputValid = true;
    this.isUserRestartInputValid = true;
  }

  /**
   * 유저가 제시한 수가 유효한지 확인 후 유효하지 않다면 상태를 변경한다.
   * @param {string[]} userInput [유저가 제시한 수]
   */
  checkUserGuessInputValid(userInput) {
    const userInputLength = userInput.length;
    const userInputSet = new Set(userInput);

    if (
      userInputLength !== 3 ||
      userInputSet.size !== 3 ||
      !this.numberRangeRegex.test(+userInput.join(""))
    ) {
      this.isUserGuessInputValid = false;
    }
  }
}

module.exports = Validation;
