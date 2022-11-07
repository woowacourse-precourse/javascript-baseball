// 사용자 input 검증
class Validation {
  constructor() {
    this.numberRangeRegex = /^\d+$/;
    this.isUserInputValid = true;
    this.isRestartUserInputValid = true;
  }
}

module.exports = Validation;
