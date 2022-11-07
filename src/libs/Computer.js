const { Random } = require("@woowacourse/mission-utils");
const { HINT } = require("../constants/index");

class Computer {
  getThreeUniqueNumbers() {
    const numbers = [];

    while (numbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }

    return numbers.join("");
  }

  getHint(inputValue, answer) {
    const ballCount = this.getBallCount(inputValue, answer);
    const strikeCount = this.getStrikeCount(inputValue, answer);

    const ballMessage = ballCount > 0 ? ballCount + HINT.BALL : "";
    const strikeMessage = strikeCount > 0 ? strikeCount + HINT.STRIKE : "";

    const hint =
      ballCount === 0 && strikeCount === 0
        ? HINT.NOTHING
        : `${ballMessage} ${strikeMessage}`.trim();

    return hint;
  }

  getBallCount(inputValue, answer) {
    let count = 0;

    [...inputValue].forEach((num, index) => {
      if (num !== answer[index] && [...answer].includes(num)) count++;
    });

    return count;
  }

  getStrikeCount(inputValue, answer) {
    let count = 0;

    [...inputValue].forEach((num, index) => {
      if (num === answer[index]) count++;
    });

    return count;
  }
}

module.exports = Computer;
