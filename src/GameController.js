const MissionUtils = require("@woowacourse/mission-utils");
// const ComputerModel = require("./ComputerModel");
const GAME_MESSAGE = require("./constants/message");

class GameController {
  start(numberFromUser, numberFromComputer) {
    const getResult = (userInput, computerInput) => {
      const isStrike = (userValue, index) => userValue === computerInput[index];
      const userScore = {
        strikeCount: 0,
        ballCount: 0,
        nothingCount: 0,
      };

      userInput.forEach((userValue, idx) => {
        if (isStrike(userValue, idx)) userScore.strikeCount += 1;
        else if (computerInput.includes(userValue)) userScore.ballCount += 1;
        else userScore.nothingCount += 1;
      });
      return userScore;
    };
  }
}

module.exports = GameController;
