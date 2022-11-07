const MissionUtils = require("@woowacourse/mission-utils");
const { checkIncorrectNumber } = require("../util/computer/check");
const { getPrint } = require("../util/computer/print");

function Computer() {
  const computerNumberArr = [];
  while (computerNumberArr.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computerNumberArr.includes(number)) {
      computerNumberArr.push(number);
    }
  }
  const computerNumberStr = computerNumberArr.join("");

  function checkGameResult(numberStr) {
    if (checkIncorrectNumber(numberStr))
      return new Error("올바르지 않은 입력값입니다.");

    let ball = 0;
    let strike = 0;

    if (numberStr === computerNumberStr)
      return { isEnd: true, print: "3스트라이크" };

    [...numberStr].forEach((digit, i) => {
      if (+digit === computerNumberArr[i]) return strike++;
      if (computerNumberArr.includes(+digit)) return ball++;
    });

    return { isEnd: false, print: getPrint(ball, strike) };
  }

  return { computerNumberStr, checkGameResult };
}

module.exports = Computer;
