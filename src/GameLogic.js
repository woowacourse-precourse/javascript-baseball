const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("../src/Validation");

const {
  GAME_CONFIG,
  ERROR_CHECK,
  INGAME_MESSAGE,
  GAME_RESULT,
  RESPONSE,
} = require("./Constant");

class GameLogic {
  judge(userInput, computerInput) {
    const strikeBallNothing = [0, 0, 0];

    userInput.forEach((el, index) => {
      if (el === computerInput[index]) {
        strikeBallNothing[0] += 1;
      } else if (computerInput.includes(Number(el))) {
        strikeBallNothing[1] += 1;
      }
    });

    return strikeBallNothing;
  }

  result() {}
}

module.exports = GameLogic;
