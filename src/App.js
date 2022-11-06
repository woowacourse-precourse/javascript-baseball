const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answer = null;
  }
  play() {
    this.getAnswerNumber();
  }
  getAnswerNumber() {
    const RANGE_START_NUMBER = 1;
    const RANGE_END_NUMBER = 9;
    const NUMBER_OF_DIGITS = 3;

    const ANSWER = MissionUtils.Random.pickUniqueNumbersInRange(
      RANGE_START_NUMBER,
      RANGE_END_NUMBER,
      NUMBER_OF_DIGITS
    );

    this.answer = ANSWER;
  }
}

module.exports = App;
