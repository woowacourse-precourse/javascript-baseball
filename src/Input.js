const MissionUtils = require("@woowacourse/mission-utils");
const Validation = require("../src/Validation");

const { GAME_CONFIG, INGAME_MESSAGE } = require("./Constant");

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

      //   if (computerPick[0] && !computerPick.includes(computerPick[0])) {
      //     computerPick.push(randomNumber);
      //   } else if (
      //     computerPick[1] &&
      //     !computerPick.includes(computerPick[0]) &&
      //     !computerPick.includes(computerPick[1])
      //   ) {
      //     computerPick.push(randomNumber);
      //   }
    }
    return computerPick;
  }

  user() {
    MissionUtils.Console.readLine(INGAME_MESSAGE.INPUT_NUMBER, (string) => {
      const validation = new Validation();
      const stringToArray = string.split("").map((el) => Number(el));

      if (validation.checkAll(stringToArray)) {
        return stringToArray;
      }
    });
  }
}

module.exports = Input;
