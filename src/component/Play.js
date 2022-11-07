const { Console } = require("@woowacourse/mission-utils");

class Play {
  setResult(computerNum, userInput) {
    const splitComputerNum = [...computerNum];
    const splitUserInput = [...userInput];

    const countStrike = splitComputerNum.reduce(
      (countStrike, currNum, index) => {
        const isStrike = currNum === splitUserInput[index];
        if (isStrike) countStrike += 1;

        return countStrike;
      },
      0
    );
  }
}

module.exports = Play;
