// 사용자 input 검증
class Validation {
  constructor() {
    this.numberRangeRegex = /^\d+$/;
    this.isUserGuessInputValid = true;
    this.isUserRestartInputValid = true;
  }

  /**
   * 유저가 제시한 수가 유효한지 확인 후 유효하지 않다면 상태를 변경한다.
   * @param {string[]} userGuessInput [유저가 제시한 수]
   */
  checkUserGuessInputValid(userGuessInput) {
    const userGuessInputLength = userGuessInput.length;
    const userGuessInputSet = new Set(userGuessInput);

    if (
      userGuessInputLength !== 3 ||
      userGuessInputSet.size !== 3 ||
      !this.numberRangeRegex.test(+userGuessInput.join(""))
    ) {
      this.isUserGuessInputValid = false;
    }
  }
}

module.exports = Validation;
