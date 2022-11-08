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
    this.getCount(this.answerNumber);
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
  getCount(answer) {
    Console.readLine(MESSAGE.INPUT_NUMBER, (input) => {
      const inputNumber = [...input].map(Number);
      const { ball, strike } = this.count(inputNumber, answer); // count 함수 작업

      this.isValidInput(input); // 유효성 검사
      this.printScore(ball, strike);
    });
  }
  if(strike !== 3){
      return this.getCount
  }
}
const game = new Game();
game.play();
module.exports = Game;
