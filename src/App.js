const MissionUtils = require("@woowacourse/mission-utils");

// game setting
const START_GAME_NUM = 1;
const END_GAME_NUM = 9;
const GAME_NUM_SIZE = 3;

function generateNumberList(size) {
  const result = [];
  while (result.length < size) {
    const number = MissionUtils.Random.pickNumberInRange(
      START_GAME_NUM,
      END_GAME_NUM
    );
    if (!result.includes(number)) {
      result.push(number);
    }
  }
  return result;
}

class App {
  play() {
    const computerNumberList = generateNumberList(GAME_NUM_SIZE);
  }
}

module.exports = App;
