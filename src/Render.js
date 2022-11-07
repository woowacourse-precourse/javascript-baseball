const MissionUtils = require("@woowacourse/mission-utils");
const {
  START_MENTION,
  START_GETNUMBER,
  GAME_NOTHING,
  GAME_END_MENTION,
  END_RETRY_MENTION,
  END_MENTION,
} = require("./constants");

class Render {
  constructor() {}

  startment() {
    MissionUtils.Console.print(START_MENTION);
  }

  getUser() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(START_GETNUMBER, (number) => {
        resolve(number);
      });
    });
  }

  result({ ballCount, strikeCount }) {
    if (strikeCount !== 3) {
      MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
    if (strikeCount === 3) {
      MissionUtils.Console.print(GAME_END_MENTION);
    }

    if (ballCount === 0 && strikeCount === 0) {
      MissionUtils.Console.print(GAME_NOTHING);
    }
  }

  replayQnA() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(END_RETRY_MENTION, (number) => {
        resolve(number);
      });
    });
  }

  end() {
    MissionUtils.Console.print(END_MENTION);
  }
}
module.exports = Render;
