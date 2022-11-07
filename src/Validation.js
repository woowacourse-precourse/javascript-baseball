const MissionUtils = require("@woowacourse/mission-utils");
const {
  GAME_CONFIG_NUMBER,
  ERROR_CHECK,
  INGAME_MESSAGE,
  GAME_RESULT,
  RESPONSE,
} = require("./Constant");

class Validation {
  checkNumber(value) {
    if (![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value)) {
      throw INGAME_MESSAGE.ERROR;
    }
  }

  checkLength(input) {
    if (input.length !== 3) {
      throw INGAME_MESSAGE.ERROR;
    }
  }
}

module.exports = Validation;
