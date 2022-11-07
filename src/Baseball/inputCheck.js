class inputValidation {
  checkInputValidation(userInputNum) {
    const [CHECKED_NUM_LENGTH, CHECKED_IS_NUMBER, CHECKED_NUM_OVERLAP] = [
      this.checkNumLength(userInputNum),
      this.checkIsNumber(userInputNum),
      this.checkNumOverlap(userInputNum),
    ];

    if (CHECKED_NUM_LENGTH && CHECKED_IS_NUMBER && CHECKED_NUM_OVERLAP) {
      return true;
    }
    return false;
  }

  checkNumLength(input) {
    if (input.length === 3) {
      return true;
    }
    return false;
  }

  checkIsNumber(input) {
    if (/^[1-9]*$/g.test(input)) {
      return true;
    }
    return false;
  }

  checkNumOverlap(input) {
    const SET = new Set(input);
    const UNIQUE_ELEMENTS = [...SET];

    if (UNIQUE_ELEMENTS.length === 3) {
      return true;
    }
    return false;
  }

  checkUserSelect(value) {
    const CHECKED_SELECT_LENGTH = value.length === 1;
    const CHECKED_SELECT_NUM = /^[1-2]*$/g.test(value);

    if (CHECKED_SELECT_LENGTH && CHECKED_SELECT_NUM) {
      return true;
    }
    return false;
  }
}

const INPUT_CHECK = new inputValidation();
module.exports = INPUT_CHECK;
