const MissionUtils = require("@woowacourse/mission-utils");
const Tools = require("./tools");

module.exports = class RandomNumberGeneratorClass {
  constructor() {
    this.tools = new Tools();
  }

  pickNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }
  randomNumber() {
    const RANDOM_NUMBER_ARRAY = [];
    while (RANDOM_NUMBER_ARRAY.length < 3) {
      const RANDOM_NUMBER = this.pickNumber();
      !this.tools.arrayInCheck(RANDOM_NUMBER_ARRAY, RANDOM_NUMBER) &&
        RANDOM_NUMBER_ARRAY.push(RANDOM_NUMBER);
    }
    return RANDOM_NUMBER_ARRAY;
  }
};
