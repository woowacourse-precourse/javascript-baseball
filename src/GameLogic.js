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
    const ballStrike = [0, 0];

    userInput.forEach((el, index) => {
      if (el === computerInput[index]) {
        ballStrike[1] += 1;
      } else if (computerInput.includes(Number(el))) {
        ballStrike[0] += 1;
      }
    });

    return ballStrike;
  }

  result(ballStrike) {
    if (ballStrike[1] === 3) {
      MissionUtils.Console.print(INGAME_MESSAGE.END);
    } else if (ballStrike[0] === 0 && ballStrike[1] === 0) {
        MissionUtils.Console.print()
    }
  }
}

module.exports = GameLogic;
