const { Random } = require("@woowacourse/mission-utils");
const { MAX_NUMBER, ERROR_MESSAGE } = require("../constant/constant");

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
};
