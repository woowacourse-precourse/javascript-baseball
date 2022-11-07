const { Random } = require("@woowacourse/mission-utils");
const {
  MAX_NUMBER,
  ERROR_MESSAGE,
  GAME_MESSAGE,
} = require("../constant/constant");

module.exports = {
  computerUniqueThreeNumbers() {
    const computer = [];
    while (computer.length < MAX_NUMBER) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
  checkUserValid(userAnswer) {
    if (userAnswer.indexOf(0) !== -1) throw ERROR_MESSAGE.IS_INCLUDE_ZERO;
    if (isNaN(userAnswer)) {
      throw ERROR_MESSAGE.IS_NUMBER;
    }
    if (userAnswer.length !== MAX_NUMBER && !isNaN(userAnswer)) {
      throw ERROR_MESSAGE.IS_MAX_NUMBER;
    }
    const setAnswer = new Set(userAnswer.split(""));
    if ([...setAnswer].length !== MAX_NUMBER) {
      throw ERROR_MESSAGE.IS_REPETITION;
    }
  },
  compareComputerAndUser(computerNum, userNum) {
    const toStringComputerNum = String(computerNum).replaceAll(",", "");
    const toStringUserNum = String(userNum);
    let strike = 0;
    let ball = 0;
    for (
      let userNumberIndex = 0;
      userNumberIndex < toStringUserNum.length;
      userNumberIndex++
    ) {
      if (
        toStringComputerNum.indexOf(toStringUserNum[userNumberIndex]) === -1
      ) {
        continue;
      }
      if (
        toStringUserNum[userNumberIndex] ===
        toStringComputerNum[userNumberIndex]
      ) {
        strike++;
      } else {
        ball++;
      }
    }
    if (strike === 0 && ball === 0) return GAME_MESSAGE.NOTHING;
    const context = makeWords(strike, ball);
    return context;
  },
};

//내부 로직 함수
function makeWords(strike, ball) {
  const ballText = ball > 0 ? `${ball}${GAME_MESSAGE.BALL}` : "";
  const strikeText = strike > 0 ? `${strike}${GAME_MESSAGE.STRIKE}` : "";
  const space = ball > 0 && strike > 0 ? " " : "";
  return ballText + space + strikeText;
}
