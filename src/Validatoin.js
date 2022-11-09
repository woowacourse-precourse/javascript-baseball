const { ErrorMessage } = require("./Contants");

class Validation {
  inputs;

  constructor() {}

  // 게임종료 | 다시하기 유효성 검사
  isValidUserSettingNumber(input) {
    if(input !== '1' && input !== '2') {
      throw new Error(ErrorMessage.NOT_VALID_SETTING_NUMBER);
    }
  }

  // 유저 입력값 유효성 검사
  isValidUserInputNumber(inputs) {
    this.inputs = inputs;
    this.isEmpty();
    this.isRangeNumber();
    this.isOverLayRange();
    this.isNumberLengthThree();
  }

  // 1부터 9까지의 숫자인지 아닌지
  isRangeNumber() {
    const isNumberRegExp = /^[1-9]+$/;
    if (!isNumberRegExp.test(this.inputs)) {
      throw new Error(ErrorMessage.NOT_VALID_RANGE_NUMBER);
    }
    return true;
  }

  // 입력한 값이 3개인지
  isNumberLengthThree() {
    const answerToArray = [...this.inputs];
    if (answerToArray.length !== 3) {
      throw new Error(ErrorMessage.NOT_VALID_NUMBER_LENGTH);
    }
    return true;
  }

  // 중복된 값이 있는지
  isOverLayRange() {
    const answerToArray = [...this.inputs];
    const answerToSet = new Set(answerToArray);
    if (answerToArray.length !== answerToSet.size) {
      throw new Error(ErrorMessage.NOT_VALID_OVERLAY_NUMBER);
    }
    return true;
  }

  // 값이 비었는지
  isEmpty() {
    if (!this.inputs || this.inputs === null || 
      this.inputs === undefined || this.inputs === '')  {
      throw new Error(ErrorMessage.NOT_VALID_EMPTY_INPUT);
    }
    return true;
  }
}

module.exports = Validation;