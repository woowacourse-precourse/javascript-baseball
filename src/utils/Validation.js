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

  /**
   * 유저가 제시한 수가 valid 한지 여부를 return 한다.
   * @param {string[]} userGuessInput [유저가 제시한 수]
   * @return {boolean} [valid 여부]
   */
  getIsUserGuessInputValid(userGuessInput) {
    this.checkUserGuessInputValid(userGuessInput);
    return this.isUserGuessInputValid;
  }

  /**
   * 유저 재시작 여부 input 이 유효한지 확인 후 유효하지 않다면 상태를 변경한다.
   * @param {string} UserRestartInput [유저 재시작 여부 input]
   */
  CheckUserRestartInputValid(UserRestartInput) {
    if (UserRestartInput !== "1" && UserRestartInput !== "2") {
      this.isUserRestartInputValid = false;
    }
  }

  /**
   * 유저 재시작 여부 input 이 valid 한지 여부를 return 한다.
   * @param {string} restartUserInput [유저 재시작 여부 input]
   * @return {boolean} [valid 여부]
   */
  getIsUserRestartInputValid(restartUserInput) {
    this.CheckUserRestartInputValid(restartUserInput);
    return this.isUserRestartInputValid;
  }
}

module.exports = Validation;
