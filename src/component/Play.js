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

    const countBall = splitComputerNum.reduce((countBall, currNum, index) => {
      const currNumIndex = splitUserInput.indexOf(currNum);
      const isBall = currNumIndex !== -1 && currNumIndex !== index;
      if (isBall) countBall += 1;

      return countBall;
    }, 0);

    return { countStrike, countBall };
  }
}

module.exports = Play;
