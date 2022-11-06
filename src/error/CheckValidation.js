const guideMessage =
  "\n1 ~ 9로 구성되고, 3자리가 모두 다른 숫자 3개를 입력해주세요.\n게임 종료";
const inputMore = "글자 더 입력하셨습니다.";
const inputLess = "글자 덜 입력하셨습니다.";

const checkDuplicated = (splitAnswer) => {
  return (
    splitAnswer[0] == splitAnswer[1] ||
    splitAnswer[1] == splitAnswer[2] ||
    splitAnswer[0] == splitAnswer[2]
  );
};

const CheckError = (answer) => {
  let splitAnswer = answer.split("");

  hasZero(answer);
  if (checkDuplicated(splitAnswer) && splitAnswer.length > 1) {
    throw new Error(
      "숫자끼리 중복되어서는 안됩니다.\n세 자리 모두 다른 수를 입력해주세요."
    );
  }
  containNotANumber(splitAnswer, answer);
  notRightLength(answer.length);
};

const hasZero = (answer) => {
  let isZero = false;
  const zeroRegex = /[0]/;
  zeroRegex.test(answer) ? (isZero = true) : (isZero = false);
  if (answer.length === 3 && isZero) {
    throw new Error(`숫자 0이 포함되었습니다.${guideMessage}`);
  }
  if (answer.length > 3 && isZero) {
    throw new Error(
      `숫자 0이 포함되었으며, ${answer.length - 3 + inputMore + guideMessage}`
    );
  }
  if (answer.length < 3 && isZero) {
    throw new Error(
      `숫자 0이 포함되었으며, ${3 - answer.length + inputLess + guideMessage}`
    );
  }
};

const makeNotANumberList = (splitAnswer) => {
  const regex = /[1-9]/;
  let tempNotANumberList = [];

  for (let splitIdx = 0; splitIdx < splitAnswer.length; splitIdx++) {
    if (!regex.test(splitAnswer[splitIdx])) {
      tempNotANumberList.push(splitIdx + 1);
    }
  }
  return tempNotANumberList;
};

const containNotANumber = (splitAnswer, answer) => {
  let notANumberList = makeNotANumberList(splitAnswer);
  let hasNotANumber = notANumberList.length !== 0;
  let isNotANumber = `${notANumberList.join(",")}번째 문자`;

  if (hasNotANumber && answer.length === 3) {
    throw new Error(`${isNotANumber}는 숫자가 아닙니다.${guideMessage}`);
  }
  if (hasNotANumber && answer.length > 3) {
    throw new Error(
      `${isNotANumber}는 숫자가 아니며, ${
        answer.length - 3 + inputMore + guideMessage
      }`
    );
  }
  if (hasNotANumber && answer.length < 3) {
    throw new Error(
      `${isNotANumber}는 숫자가 아니며, ${
        3 - answer.length + inputLess + guideMessage
      }`
    );
  }
};

const notRightLength = (length) => {
  if (length > 3) {
    throw new Error(`${length - 3 + inputMore + guideMessage}`);
  }
  if (length < 3) {
    throw new Error(`${3 - length + inputLess + guideMessage}`);
  }
};

module.exports = CheckError;
