const MissionUtils = require("@woowacourse/mission-utils");
class Opponent {
  //   constructor() {}
  #answer = [];
  getAnswer() {
    return this.#answer;
  }
  getAnswerString(){
    return this.getAnswer().join('');
  }
  setAnswerWith3RandomNumbers() {
    this.#answer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
}
module.exports = Opponent;
