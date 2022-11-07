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
    const noRepeat = [...new Set(input)];
    if (noRepeat.length != 3) {
      throw INGAME_MESSAGE.ERROR;
    }
  }
}

module.exports = Validation;
