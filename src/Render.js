const MissionUtils = require("@woowacourse/mission-utils");
const { GAME } = require("./data/Constants");

class Render {
  constructor() {}

  startment() {
    MissionUtils.Console.print(GAME.START_MENTION);
  }

  errorThrow(errorMessege) {
    MissionUtils.Console.close();
    throw new Error(errorMessege);
  }
  errorRetryThrow(errorMessege) {
    MissionUtils.Console.close();
    throw new Error(errorMessege);
  }

  result(ballCount, strikeCount) {
    if (strikeCount === 3) {
      MissionUtils.Console.print(GAME.GAME_THREE_STRIKE);
    } else if (strikeCount === 0 && ballCount === 0) {
      MissionUtils.Console.print(GAME.GAME_NOTHING);
    } else if (strikeCount !== 0 && ballCount !== 0) {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }

  end() {
    MissionUtils.Console.print(GAME.END_MENTION);
    MissionUtils.Console.close();
  }
}
module.exports = Render;
