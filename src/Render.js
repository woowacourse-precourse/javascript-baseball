const MissionUtils = require("@woowacourse/mission-utils");
const { GAME } = require("./constants");
const { ERROR } = require("./constants");

class Render {
  constructor() {}

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

  errorThrow(errorResult) {
    throw new Error(errorResult);
  }

  result({ ballCount, strikeCount }) {
    if (strikeCount !== 3) {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
    if (strikeCount === 3) {
      MissionUtils.Console.print(GAME.GAME_END_MENTION);
    }

    if (ballCount === 0 && strikeCount === 0) {
      MissionUtils.Console.print(GAME.GAME_NOTHING);
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
  }
}
module.exports = Render;
