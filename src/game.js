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
  }
  print(message) {
    return Console.log(print(message));
  }
}

module.exports = Game;
