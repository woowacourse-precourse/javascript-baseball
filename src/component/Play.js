const { Console } = require("@woowacourse/mission-utils");
const { RESULT } = require("../constant/message.constant");
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

  printMessage(countStrike, countBall) {
    if (countStrike === 0 && countBall === 0) {
      return Console.print(RESULT.NOTHING);
    }

    const strikeMessage =
      countStrike !== 0 ? `${countStrike}${RESULT.STRIKE}` : "";
    const ballMessage = countBall !== 0 ? `${countBall}${RESULT.BALL}` : "";
    const playMessage = `${ballMessage} ${strikeMessage}`;

    Console.print(playMessage);
  }
}

module.exports = Play;
