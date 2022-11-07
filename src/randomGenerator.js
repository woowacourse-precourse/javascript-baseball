const MissionUtils = require("@woowacourse/mission-utils");
const Tools = require("./tools");

module.exports = class RandomNumberGeneratorClass {
  constructor() {
    this.tools = new Tools();
    this.RANDOM_NUMBER_ARRAY = [];
  }

  pickNumber() {
    return MissionUtils.Random.pickNumberInRange(1, 9);
  }
  randomNumber() {
    this.RANDOM_NUMBER_ARRAY = [];
    while (this.RANDOM_NUMBER_ARRAY.length < 3) {
      const RANDOM_NUMBER = this.pickNumber();
      !this.tools.arrayInCheck(this.RANDOM_NUMBER_ARRAY, RANDOM_NUMBER) &&
        this.RANDOM_NUMBER_ARRAY.push(RANDOM_NUMBER);
    }

    return this.RANDOM_NUMBER_ARRAY;
  }
};
