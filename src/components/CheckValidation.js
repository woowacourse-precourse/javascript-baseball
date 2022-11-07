const messages = {
  guideMsg:
    "\n1 ~ 9로 구성되고, 3자리가 모두 다른 숫자 3개를 입력해주세요.\n게임 종료",
  inputMoreMsg: "글자 더 입력하셨습니다.",
  inputLessMsg: "글자 덜 입력하셨습니다.",
  duplicatedMsg:
    "숫자끼리 중복되어서는 안됩니다.\n세 자리 모두 다른 수를 입력해주세요.",
  hasZeroMsg: "숫자 0이 포함되었습니다. ",
  isNotANumberMsg: "는 숫자가 아닙니다. ",
};

const CheckValidation = (answer) => {
  let splitAnswer = answer.split("");
  let length = answer.length;

  hasZero(answer, length);
  length > 1 ? checkDuplicated(splitAnswer) : "";
  containNotANumber(splitAnswer, length);
  length === 3 ? "" : notRightLength(length);
};

const inputMore = (length) => {
  return length - 3 + messages.inputMoreMsg + messages.guideMsg;
};
const inputLess = (length) => {
  return 3 - length + messages.inputLessMsg + messages.guideMsg;
};
const throwErrorMsg = (typeOfError, length) => {
  if (length === 3) {
    throw new Error(typeOfError + messages.guideMsg);
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
  throwErrorMsg(messages.hasZeroMsg, length);
};

const checkDuplicated = (splitAnswer) => {
  if (
    splitAnswer[0] == splitAnswer[1] ||
    splitAnswer[1] == splitAnswer[2] ||
    splitAnswer[0] == splitAnswer[2]
  ) {
    throw new Error(messages.duplicatedMsg);
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
  throwErrorMsg(isNotANumber + messages.isNotANumberMsg, length);
};

const notRightLength = (length) => {
  throwErrorMsg("", length);
};

module.exports = CheckValidation;
