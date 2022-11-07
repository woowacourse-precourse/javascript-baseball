const {
  MESSAGE,
  RANDOM_NUMBER,
  END_INPUT,
  SCORE,
  ERROR,
} = require("./constants");
const { Console, Random } = require("@woowacourse/mission-utils");
class Game {
  play() {
    this.init();
  }
  init() {
    this.print(MESSAGE.START);
    this.answerNumber = this.createRandomNumber();
  }
  createRandomNumber() {
    let ramdomNumberArr = [];
    while (this.ramdomNumberArr.length < LENGTH) {
      const N = Random.piickNumberInRange(MIN, MAX);
      if (!ramdomNumberArr.includes(N)) {
        ramdomNumberArr.push(N);
      }
    }
    return ramdomNumberArr;
  }
  print(message) {
    return Console.log(print(message));
  }
}

module.exports = Game;
