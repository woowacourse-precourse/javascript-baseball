class inputValidation {
  checkInputValidation(userInputNum) {
    const [CHECKED_NUM_LENGTH, CHECKED_IS_NUMBER, CHECKED_NUM_OVERLAP] = ([
      this.checkNumLength(userInputNum),
      this.checkIsNumber(userInputNum),
      this.checkNumOverlap(userInputNum),
    ]);

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
    if (!isNaN(input)) {
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
}

const INPUT_CHECK = new inputValidation();
module.exports = INPUT_CHECK;
