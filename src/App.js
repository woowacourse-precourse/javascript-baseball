const MissionUtils = require("@woowacourse/mission-utils");

// game setting
const START_GAME_NUM = 1;
const END_GAME_NUM = 9;
const GAME_NUM_SIZE = 3;

function generateNumberList(size) {
  if (END_GAME_NUM - START_GAME_NUM < size) {
    return -1;
  }
  const result = MissionUtils.Random.pickUniqueNumbersInRange(
    START_GAME_NUM,
    END_GAME_NUM,
    size
  );
  return result;
}

class App {
  play() {}
}

module.exports = App;
