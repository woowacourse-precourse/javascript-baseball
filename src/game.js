const {
  MESSAGE,
  RANDOM_NUMBER,
  END_INPUT,
  SCORE,
  ERROR,
} = require("./constants");
const { Console, Random } = require("@woowacourse/mission-utils");
class Game {
  print(message) {
    return Console.print(message);
  }
  play() {
    this.init();
    this.getNumber(this.answerNumber);
  }
  init() {
    this.print(MESSAGE.START);
    this.answerNumber = this.createRandomNumber();
  }
  createRandomNumber() {
    let randomNumberArr = [];
    while (randomNumberArr.length < RANDOM_NUMBER.LENGTH) {
      const N = Random.pickNumberInRange(
        RANDOM_NUMBER.MIN,
        RANDOM_NUMBER.MAX
      );
      if (!randomNumberArr.includes(N)) {
        randomNumberArr.push(N);
      }
    }
    return randomNumberArr;
  }
  getNumber(answer) {
    //console.readLine();
  }
}
const game = new Game();
game.play();
module.exports = Game;
