const MissionUtils = require("@woowacourse/mission-utils");
const {
  GAME_CONFIG,
  ERROR_CHECK,
  INGAME_MESSAGE,
  GAME_RESULT,
  RESPONSE,
} = require("./Constant");

class Input {
  computer() {
    const computerPick = [];
    while (computerPick.length < GAME_CONFIG.COUNT) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        GAME_CONFIG.START_NUMBER,
        GAME_CONFIG.END_NUMBER
      );
      if (!computerPick.includes(computerPick)) {
        computerPick.push(randomNumber);
      }
    }
  }
  user() {}
}

module.exports = Input;
