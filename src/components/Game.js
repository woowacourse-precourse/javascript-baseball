const { Console } = require("@woowacourse/mission-utils");

class Game {
  validateInput(input) {
    const isValidLength = input.length === 3;
    const isValidType = !Number.isNaN(Number(input));
    const isValidRange = ![...input].includes("0");
    const isUniqueDigit = new Set([...input]).size === 3;

    const isValidInput =
      isValidLength && isValidType && isValidRange && isUniqueDigit;

    return isValidInput;
  }

  judgeAnswer(input, answer) {
    let ballCnt = 0;
    let strikeCnt = 0;

    [...input].forEach((digit, i) => {
      if (digit !== answer[i] && answer.indexOf(digit) !== -1) ++ballCnt;
    });

    [...input].forEach((digit, i) => {
      if (digit === answer[i]) ++strikeCnt;
    });

    return { ballCnt, strikeCnt };
  }

  announceResult(ballCnt, strikeCnt) {
    if (!ballCnt && !strikeCnt) return Console.print("낫싱");

    const ballText = ballCnt ? `${ballCnt}볼` : "";
    const strikeText = strikeCnt ? `${strikeCnt}스트라이크` : "";

    Console.print(`${ballText} ${strikeText}`.trim());
  }
}

module.exports = Game;
