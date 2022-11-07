const { ERROR_MESSAGE } = require("../constants");

const CheckValidation = (answer) => {
  let splitAnswer = answer.split("");
  let length = answer.length;

  hasZero(answer, length);
  length > 1 ? checkDuplicated(splitAnswer) : "";
  containNotANumber(splitAnswer, length);
  length === 3 ? "" : notRightLength(length);
};

const inputMore = (length) => {
  return length - 3 + ERROR_MESSAGE.INPUT_MORE_MSG + ERROR_MESSAGE.GUIDE_MSG;
};
const inputLess = (length) => {
  return 3 - length + ERROR_MESSAGE.INPUT_LESS_MSG + ERROR_MESSAGE.GUIDE_MSG;
};
const throwErrorMsg = (typeOfError, length) => {
  if (length === 3) {
    throw new Error(typeOfError + ERROR_MESSAGE.GUIDE_MSG);
  }
  length > 3
    ? (function () {
        throw new Error(typeOfError + inputMore(length));
      })()
    : (function () {
        throw new Error(typeOfError + inputLess(length));
      })();
};

const hasZero = (answer, length) => {
  let isZero = false;
  const zeroRegex = /[0]/;
  zeroRegex.test(answer) ? (isZero = true) : (isZero = false);

  if (!isZero) return;
  throwErrorMsg(ERROR_MESSAGE.HAS_ZERO_MSG, length);
};

const checkDuplicated = (splitAnswer) => {
  if (
    splitAnswer[0] == splitAnswer[1] ||
    splitAnswer[1] == splitAnswer[2] ||
    splitAnswer[0] == splitAnswer[2]
  ) {
    throw new Error(ERROR_MESSAGE.DUPLICATED_MSG);
  }
};

const makeNotANumberList = (splitAnswer) => {
  const regex = /[1-9]/;
  let tempNotANumberList = [];
  splitAnswer.forEach((el, idx) => {
    !regex.test(el) ? tempNotANumberList.push(idx + 1) : "";
  });
  return tempNotANumberList;
};

const containNotANumber = (splitAnswer, length) => {
  let notANumberList = makeNotANumberList(splitAnswer);
  let isNotANumber = `${notANumberList.join(",")}번째 문자`;
  let hasNotANumber = notANumberList.length !== 0;

  if (!hasNotANumber) return;
  throwErrorMsg(isNotANumber + ERROR_MESSAGE.IS_NOT_A_NUMBER_MSG, length);
};

const notRightLength = (length) => {
  throwErrorMsg("", length);
};

module.exports = CheckValidation;
