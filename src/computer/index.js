const MissionUtils = require("@woowacourse/mission-utils");
const { checkIncorrectNumber } = require("../util/computer/check");
const { getPrint } = require("../util/computer/print");

function Computer() {
  const answerNumberArr = [];

  while (answerNumberArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);

    if (!answerNumberArr.includes(number)) {
      answerNumberArr.push(number);
    }
  }
  const answerNumberStr = answerNumberArr.join("");

  function checkGameResult(numberStr) {
    if (checkIncorrectNumber(numberStr)) throw "올바르지 않은 입력값입니다.";

    let ball = 0;
    let strike = 0;

    if (numberStr === answerNumberStr)
      return { isEnd: true, print: "3스트라이크" };

    [...numberStr].forEach((digit, i) => {
      if (+digit === answerNumberArr[i]) return strike++;
      if (answerNumberArr.includes(+digit)) return ball++;
    });

    return { isEnd: false, print: getPrint(ball, strike) };
  }

  return { answerNumberStr, checkGameResult };
}

module.exports = Computer;
