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

      if (!computerPick.includes(randomNumber)) {
        computerPick.push(randomNumber);
      }
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
