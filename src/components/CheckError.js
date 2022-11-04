const CheckError = (answer) => {
  const regex = /[1-9]/;
  const zeroRegex = /[0]/;
  let splittedAnswer = answer.split("");
  let notANumberList = [];
  let isZero = false;

  if (zeroRegex.test(answer)) isZero = true;

  if (
    splittedAnswer[0] == splittedAnswer[1] ||
    splittedAnswer[1] == splittedAnswer[2] ||
    splittedAnswer[0] == splittedAnswer[2]
  ) {
    throw "숫자끼리 중복되어서는 안됩니다.\n세 자리 모두 다른 수를 입력해주세요.";
  }

  if (answer.length === 3 && isZero) {
    throw "숫자 0이 포함되었습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료";
  }

  for (
    let splittedIdx = 0;
    splittedIdx < splittedAnswer.length;
    splittedIdx++
  ) {
    if (!regex.test(splittedAnswer[splittedIdx])) {
      notANumberList.push(splittedIdx + 1);
    }
  }

  if (notANumberList.length !== 0) {
    if (answer.length === 3) {
      throw `${notANumberList.join(
        ","
      )}번째 문자는 숫자가 아닙니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
    }
    if (answer.length > 3) {
      throw `${notANumberList.join(",")}번째 문자는 숫자가 아니며, ${
        answer.length - 3
      }개의 문자를 더 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
    }
    if (answer.length < 3) {
      throw `${notANumberList.join(",")}번째 문자는 숫자가 아니며, ${
        3 - answer.length
      }개의 문자를 덜 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
    }
  }

  if (answer.length > 3) {
    throw `${
      answer.length - 3
    }개의 숫자를 더 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
  if (answer.length < 3) {
    throw `${
      3 - answer.length
    }개의 숫자를 덜 입력하셨습니다.\n1 ~ 9로 구성된 3자리 숫자를 입력해주세요.\n게임 종료`;
  }
};

module.exports = CheckError;
