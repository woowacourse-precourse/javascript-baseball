const {
  THREE_DIGITS,
  ONLY_NUMBER,
  NOT_DUPLICATED,
  ONE_OR_TWO,
} = require('./TextData');

function inputVerification(USER_INPUT) {
  const ORGANIZED_DATA = USER_INPUT.filter(
    (data, index) => USER_INPUT.indexOf(data) === index
  );
  if (USER_INPUT.includes(0)) {
    throw new Error(ONE_OR_TWO);
  }
  if (USER_INPUT.length !== 3) {
    throw new Error(THREE_DIGITS);
  }
  if (USER_INPUT.includes(NaN)) {
    throw new Error(ONLY_NUMBER);
  }
  if (ORGANIZED_DATA.length !== 3) {
    throw new Error(NOT_DUPLICATED);
  }
  return USER_INPUT;
}

module.exports = inputVerification;
