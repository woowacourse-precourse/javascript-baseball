class inputValidation {
  checkInputValidation(userInputNum) {
    if (
      this.checkNumLength(userInputNum) &&
      this.checkIsNumber(userInputNum) &&
      this.checkNumOverlap(userInputNum)
    )
      return;
    throw new Error('유효하지 않은 숫자를 입력했습니다.');
  }

  checkUserSelect(value) {
    const CHECKED_SELECT_LENGTH = value.length === 1;
    const CHECKED_SELECT_NUM = /^[1-2]*$/g.test(value);

    if (CHECKED_SELECT_LENGTH && CHECKED_SELECT_NUM) return;
    throw new Error('유효하지 않은 숫자를 입력했습니다.');
  }

  checkNumLength(input) {
    return input.length === 3;
  }

  checkIsNumber(input) {
    return /^[1-9]*$/g.test(input);
  }

  checkNumOverlap(input) {
    const SET = new Set(input);
    const UNIQUE_ELEMENTS = [...SET];

    return UNIQUE_ELEMENTS.length === 3;
  }
}

const INPUT_CHECK = new inputValidation();
module.exports = INPUT_CHECK;
