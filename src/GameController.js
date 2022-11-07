const MissionUtils = require("@woowacourse/mission-utils");
// const ComputerModel = require("./ComputerModel");
const GAME_MESSAGE = require("./constants/message");

class GameController {
  getResult(userInput, computerInput) {
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
  }

  start(numberFromUser, numberFromComputer) {
    const getResult = (userInput, computerInput) => {};
    const { strikeCount, ballCount, nothingCount } = this.getResult(
      numberFromUser,
      numberFromComputer
    );
    if (strikeCount === 3) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
      MissionUtils.Console.print(`3개의 숫자를 모두 맞히셨습니다 ! 게임 종료`);
      return true;
    }
    if (strikeCount && ballCount) {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
    if (strikeCount && !ballCount) {
      MissionUtils.Console.print(`${strikeCount}스트라이크`);
    }
    if (ballCount && !strikeCount) {
      MissionUtils.Console.print(`${ballCount}볼`);
    }
    if (nothingCount === 3) {
      MissionUtils.Console.print(`낫싱`);
    }
    return false;
  }
}

module.exports = GameController;
