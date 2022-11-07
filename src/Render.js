const MissionUtils = require("@woowacourse/mission-utils");
const { GAME } = require("./data/Constants");
const { ERROR } = require("./data/Constants");
class Render {
  constructor({ errorResult, errorRetryResult }) {
    this.errorResult = errorResult;
    this.errorRetryResult = errorRetryResult;
  }

  startment() {
    MissionUtils.Console.print(GAME.START_MENTION);
  }

  getUser() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(GAME.START_GETNUMBER, (number) => {
        resolve(number);
      });
    });
  }

  errorThrow(errorMessege) {
    throw new Error(errorMessege);
  }
  errorRetryThrow(errorMessege) {
    throw new Error(errorMessege);
  }

  result(ballCount, strikeCount) {
    if (strikeCount === 3) {
      MissionUtils.Console.print(GAME.GAME_THREE_STRIKE);
      MissionUtils.Console.print(GAME.GAME_END_MENTION);
    }

    if (ballCount === 0 && strikeCount === 0) {
      MissionUtils.Console.print(GAME.GAME_NOTHING);
    } else {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }

  replayQnA() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(GAME.END_RETRY_MENTION, (number) => {
        resolve(number);
      });
    });
  }

  end() {
    MissionUtils.Console.print(GAME.END_MENTION);
    MissionUtils.Console.close();
  }
}
module.exports = Render;
