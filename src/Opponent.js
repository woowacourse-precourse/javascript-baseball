const { Random } = require("@woowacourse/mission-utils");
class Opponent {
  //   constructor() {}
  #answer = "";
  getAnswer() {
    return this.#answer;
  }
  setAnswer() {
    this.#answer = Random.pickUniqueNumbersInRange(1, 9, 3).join("");
  }
}
module.exports = Opponent;
