const {
  MESSAGE,
  RANDOM_NUMBER,
  END_INPUT,
  SCORE,
  ERROR,
} = require("./constants");
const { Console, Random } = require("@woowacourse/mission-utils");
class Game {
  constructor() {
    this.answerNumber;
  }
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
      const { ball, strike } = this.countPitch(
        inputNumber,
        this.answerNumber
      );

      //this.isValidInput(input); // 유효성 검사
      //this.printScore(ball, strike);
      if (strike !== 3) {
        //return this.getCount;
      } else {
        this.print(MESSAGE.SUCCESS);
        // 재시작 구문
      }
      return;
    });
  }
  countPitch(inputNumber, answerNumber) {
    let ball = 0;
    let strike = 0;
    inputNumber.forEach((number, index) => {
      if (number === answerNumber[index]) {
        strike++;
      } else if (answerNumber.includes(number)) {
        ball++;
      }
    });
    console.log(answerNumber, inputNumber, ball, strike);
    return { ball, strike };
  }
}
const game = new Game();
game.play();
module.exports = Game;
