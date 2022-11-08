const { Console } = require("@woowacourse/mission-utils");
const { GAME, ERROR } = require("./Constants");

class Render {
  constructor() {}

  startment() {
    Console.print(GAME.START_MENTION);
  }

  errorThrow(errorMessege) {
    if (errorMessege !== ERROR.USER_INPUT_PASS) {
      throw new Error(errorMessege);
    }
  }
  errorRetryThrow(errorMessege) {
    if (errorMessege !== ERROR.USER_INPUT_PASS) {
      throw new Error(errorMessege);
    }
  }
  result(ballCount, strikeCount) {
    if (ballCount === 0 && strikeCount === 0) {
      Console.print(GAME.GAME_NOTHING);
    }
    if (strikeCount === 3) {
      Console.print(GAME.GAME_THREE_STRIKE);
    }
    if (ballCount === 0 && strikeCount !== 0 && strikeCount !== 3) {
      Console.print(`${strikeCount}스트라이크`);
    }
    if (strikeCount === 0 && ballCount !== 0) {
      Console.print(`${ballCount}볼`);
    }
    if (ballCount !== 0 && strikeCount !== 0) {
      Console.print(`${ballCount}볼 ${strikeCount}스트라이크`);
    }
  }

  end() {
    Console.close();
    Console.print(GAME.END_MENTION);
  }
}
module.exports = Render;
