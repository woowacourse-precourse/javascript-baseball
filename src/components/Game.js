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
}

module.exports = Game;
