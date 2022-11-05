const { Console } = require('@woowacourse/mission-utils');
const { RESULT } = require('../constant/baseball');

class Game {
  getGameResult(computerNum, userInput) {
    const splittedComputerNum = [...computerNum];
    const splittedUserInput = [...userInput];

    const ballCount = splittedComputerNum.reduce((ballCount, currNum, index) => {
      const currNumIndex = splittedUserInput.indexOf(currNum);
      const isBall = currNumIndex !== -1 && currNumIndex !== index;

      if (isBall) ballCount += 1;
      return ballCount;
    }, 0);

    const strikeCount = splittedComputerNum.reduce((strikeCount, currNum, index) => {
      const isStrike = currNum === splittedUserInput[index];

      if (isStrike) strikeCount += 1;
      return strikeCount;
    }, 0);

    return { ballCount, strikeCount };
  }

  renderGameMessage(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      return Console.print(RESULT.NOTHING);
    }

    const ballMessage = ballCount !== 0 ? `${ballCount}${RESULT.BALL}` : '';
    const strikeMessage = strikeCount !== 0 ? `${strikeCount}${RESULT.STRIKE}` : '';
    const gameMessage = `${ballMessage} ${strikeMessage}`;

    Console.print(gameMessage);
  }
}

module.exports = Game;
