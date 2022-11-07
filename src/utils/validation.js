// 사용자 input 검증
class Validation {
  constructor() {
    this.numberRangeRegex = /^\d+$/;
    this.isUserGuessInputValid = true;
    this.isUserRestartInputValid = true;
  }
}

module.exports = Validation;
