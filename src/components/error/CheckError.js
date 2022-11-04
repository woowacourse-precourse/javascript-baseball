const CheckError = (answer) => {
  let splitAnswer = answer.split("");

  hasZero(answer);
  if (checkDuplicated(splitAnswer)) {
    throw "숫자끼리 중복되어서는 안됩니다.\n세 자리 모두 다른 수를 입력해주세요.";
  }
  containNotANumber(splitAnswer, answer);
  notRightLength(answer.length);
};

const checkDuplicated = (splitAnswer) => {
  return splitAnswer[0] == splitAnswer[1] ||
    splitAnswer[1] == splitAnswer[2] ||
    splitAnswer[0] == splitAnswer[2]
    ? true
    : false;
};

const hasZero = (answer) => {
  let isZero = false;
  const zeroRegex = /[0]/;
  zeroRegex.test(answer) ? (isZero = true) : (isZero = false);
  if (answer.length === 3 && isZero) {
    throw "숫자 0이 포함되었습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료";
  }
  if (answer.length > 3 && isZero) {
    throw `숫자 0이 포함되었으며, ${
      answer.length - 3
    }글자 초과되었습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
  if (answer.length < 3 && isZero) {
    throw `숫자 0이 포함되었으며, ${
      3 - answer.length
    }글자 미달되었습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
};

const containNotANumber = (splitAnswer, answer) => {
  const regex = /[1-9]/;
  let notANumberList = [];

  for (let splitIdx = 0; splitIdx < splitAnswer.length; splitIdx++) {
    if (!regex.test(splitAnswer[splitIdx])) {
      notANumberList.push(splitIdx + 1);
    }
  }

  let existNotANumber = notANumberList.length !== 0;

  if (existNotANumber && answer.length === 3) {
    throw `${notANumberList.join(
      ","
    )}번째 문자는 숫자가 아닙니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
  if (existNotANumber && answer.length > 3) {
    throw `${notANumberList.join(",")}번째 문자는 숫자가 아니며, ${
      answer.length - 3
    }개의 문자를 더 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
  if (existNotANumber && answer.length < 3) {
    throw `${notANumberList.join(",")}번째 문자는 숫자가 아니며, ${
      3 - answer.length
    }개의 문자를 덜 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
};

const notRightLength = (length) => {
  if (length > 3) {
    throw `${
      length - 3
    }개의 숫자를 더 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
  if (length < 3) {
    throw `${
      3 - length
    }개의 숫자를 덜 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
};

module.exports = CheckError;
