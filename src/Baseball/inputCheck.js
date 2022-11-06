class inputValidation {
  checkInputValidation(userInputNum) {
    const SET = new Set(userInputNum);
    const UNIQUE_ELEMENTS = [...SET];

    const CHECK_NUM_LENGTH = userInputNum.length === 3;
    const CHECK_IS_NUMBER = !isNaN(userInputNum);
    const CHECK_NUM_OVERLAP = UNIQUE_ELEMENTS.length === 3;

    if (CHECK_NUM_LENGTH && CHECK_IS_NUMBER && CHECK_NUM_OVERLAP) {
      return true;
    }
    return false;
  }
}

const INPUT_CHECK = new inputValidation();
module.exports = INPUT_CHECK;
