const { ERROR_MESSAGE } = require("./constants");

const CheckValidation = (answer) => {
  let splitAnswer = answer.split("");
  let length = answer.length;

  hasZero(answer, length);
  if (length > 1) checkDuplicated(splitAnswer);
  containNotANumber(splitAnswer, length);
  if (length !== 3) notRightLength(length);
};

const throwErrorMsg = (typeOfError) => {
  throw new Error(typeOfError + ERROR_MESSAGE.GUIDE_MSG);
};

const hasZero = (answer) => {
  let isZero = false;
  const zeroRegex = /[0]/;
  zeroRegex.test(answer) ? (isZero = true) : (isZero = false);

  if (!isZero) return;
  throwErrorMsg(ERROR_MESSAGE.HAS_ZERO_MSG);
};

const checkDuplicated = (splitAnswer) => {
  if (
    splitAnswer[0] == splitAnswer[1] ||
    splitAnswer[1] == splitAnswer[2] ||
    splitAnswer[0] == splitAnswer[2]
  ) {
    throwErrorMsg(ERROR_MESSAGE.DUPLICATED_MSG);
  }
};

const checkNotANumber = (splitAnswer) => {
  const regex = /[1-9]/;
  for (let splitChar of splitAnswer) {
    if (!regex.test(splitChar)) return true;
  }
  return false;
};

const containNotANumber = (splitAnswer) => {
  let hasNotANumber = checkNotANumber(splitAnswer);

  if (!hasNotANumber) return;
  throwErrorMsg(ERROR_MESSAGE.IS_NOT_A_NUMBER_MSG);
};

const notRightLength = (length) => {
  throwErrorMsg("");
};

module.exports = CheckValidation;
