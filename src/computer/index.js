const MissionUtils = require("@woowacourse/mission-utils");
const { getPrint } = require("../util/computer/print");

function Computer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  const computerNumberStr = computer.join("");

  function checkGameResult(numberStr) {
    let ball = 0;
    let strike = 0;

    if (numberStr === computerNumberStr)
      return { isEnd: true, print: "3스트라이크" };

    [...numberStr].forEach((digit, i) => {
      if (+digit === computer[i]) return strike++;
      if (computer.includes(+digit)) return ball++;
    });

    return { isEnd: false, print: getPrint(ball, strike) };
  }

  return { computerNumberStr, checkGameResult };
}

module.exports = Computer;
