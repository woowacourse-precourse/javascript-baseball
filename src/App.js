const { Console, Random } = require('@woowacourse/mission-utils');
const { isValidUserNumber, isValidRestartNumber } = require('./validation.js');
const { GUIDE } = require('./Constants.js');
class App {
  constructor() {
    this.userNumber = 0;
    this.computerNumber = 0;
    this.restartNumber = 0;
  }

  play() {
    this.printGameStartMessage();
    this.playGame();
  }

  printGameStartMessage() {
    Console.print(GUIDE.GAME_START_MESSAGE);
  }

  createComputerNumber() {
    return Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  playGame() {
    this.computerNumber = this.createComputerNumber();
    this.guessComputerNumber();
  }

  guessComputerNumber() {
    Console.readLine(GUIDE.ENTER_USER_NUMBER_MESSAGE, (input) => {
      if (isValidUserNumber(input)) this.userNumber = input.split('').map((el) => +el);
      Console.print(this.computerNumber);
      Console.print(this.userNumber);
      Console.print(this.printCountResult());
      if (this.getNumberOfStrikes() === 3) return this.selectRestartGame();
      return this.guessComputerNumber();
    });
  }

  selectRestartGame() {
    Console.readLine(GUIDE.ENTER_GAME_RESART_NUMBER_MESSAGE, (input) => {
      if (isValidRestartNumber(input)) this.restartNumber = Number(input);
      if (this.restartNumber === 1) {
        return this.playGame();
      } else {
        return Console.close();
      }
    });
  }

  getNumberOfBalls() {
    let numberOfBalls = 0;
    this.computerNumber.forEach((digit, idx) => {
      if (this.userNumber.includes(digit) && this.computerNumber[idx] !== this.userNumber[idx])
        numberOfBalls += 1;
    });
    return numberOfBalls;
  }

  getNumberOfStrikes() {
    let numberOfStrikes = 0;
    this.computerNumber.forEach((digit, idx) => {
      if (this.userNumber.includes(digit) && this.computerNumber[idx] === this.userNumber[idx])
        numberOfStrikes += 1;
    });
    return numberOfStrikes;
  }

  printCountResult() {
    let numberOfBalls = this.getNumberOfBalls();
    let numberOfStrikes = this.getNumberOfStrikes();

    if (numberOfBalls === 0 && numberOfStrikes === 0) return GUIDE.NONE_MATCHING_MESSAGE;
    if (numberOfBalls === 0) {
      if (numberOfStrikes === 3) {
        return `${numberOfStrikes}스트라이크\n` + GUIDE.GAME_FINISH_MESSAGE;
      }
      return `${numberOfStrikes}스트라이크`;
    } else {
      if (numberOfStrikes === 0) return `${numberOfBalls}볼`;
      return `${numberOfBalls}볼 ${numberOfStrikes}스트라이크`;
    }
  }
}
const app = new App();
app.play();

module.exports = App;
