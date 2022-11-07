const MissionUtils = require("@woowacourse/mission-utils");
const {
  GAME_CONFIG_NUMBER,
  ERROR_CHECK,
  INGAME_MESSAGE,
  GAME_RESULT,
  RESPONSE,
} = require("./Constant");

class Validation {
  checkAll(input) {
    this.checkNumber(input);
    this.checkLength(input);
    this.checkRepeat(input);
  }

  checkLength(input) {
    if (input.length !== 3) {
      throw INGAME_MESSAGE.ERROR;
    }
  }

  checkNumber(input) {
    if (
      ![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(input[0]) ||
      ![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(input[1]) ||
      ![1, 2, 3, 4, 5, 6, 7, 8, 9].includes(input[2])
    ) {
      throw INGAME_MESSAGE.ERROR;
    }
  }

  checkRepeat(input) {
    if (
      input[0] === input[1] ||
      input[1] === input[2] ||
      input[2] === input[0]
    ) {
      throw INGAME_MESSAGE.ERROR;
    }
  }
}

module.exports = Validation;
