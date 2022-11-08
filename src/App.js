const { Random, Console } = require('@woowacourse/mission-utils');
const {
  START_NUMBER,
  END_NUMBER,
  NEW_GAME,
  EXIT_GAME,
  ANSWER,
  REGAME_MESSAGE,
  WIN_MESSAGE,
  INPUT_NUMBER_MESSAGE,
  START_MESSAGE,
  BALL,
  STRIKE,
  NOTHING,
  INVALID_NUMBER_ERROR,
  LENGTH_ERROR,
  DUPLICATE_ERROR,
} = require('./constant');

class App {
  constructor() {
    this.computerNumber = null;
    this.userNumber = null;
  }

  printMessage(message) {
    Console.print(message);
  }

  generateComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);

      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }

    this.computerNumber = computerNumber;
  }

  inputNumber(message) {
    let number = null;

    Console.readLine(message, (input) => {
      number = [...input].map((num) => Number(num));
    });

    return number;
  }

  isNumber() {
    for (let number of this.userNumber) {
      if (!(START_NUMBER <= number && number <= END_NUMBER)) {
        throw new Error(INVALID_NUMBER_ERROR);
      }
    }

    return true;
  }

  isLength3() {
    if (this.userNumber.length !== 3) throw new Error(LENGTH_ERROR);
  }

  isDuplicated() {
    const userNumberSet = new Set(this.userNumber);

    if (userNumberSet.size !== this.userNumber.length)
      throw new Error(DUPLICATE_ERROR);
  }

  userNumberException() {
    this.isNumber();
    this.isLength3();
    this.isDuplicated();
  }

  countStrike() {
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (this.computerNumber[i] === this.userNumber[i]) {
        strike++;
      }
    }

    return strike;
  }

  countBall() {
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (
        this.computerNumber.includes(this.userNumber[i]) &&
        this.computerNumber[i] !== this.userNumber[i]
      ) {
        ball++;
      }
    }

    return ball;
  }

  printResult(ball, strike) {
    let result = ``;

    if (ball) result += `${ball}${BALL}`;

    if (strike) result += ` ${strike}${STRIKE}`;

    if (result === ``) result += `${NOTHING}`;

    Console.print(result.trim());
  }

  selectedNumberException(selectedNumber) {
    if (!(selectedNumber === NEW_GAME || selectedNumber === EXIT_GAME)) {
      throw new Error(INVALID_NUMBER_ERROR);
    }
  }

  async askReGame() {
    const selectedNumber = Number(this.inputNumber(REGAME_MESSAGE));
    this.selectedNumberException(selectedNumber);

    if (selectedNumber === NEW_GAME) this.startNewGame();

    if (selectedNumber === EXIT_GAME) Console.close();
  }

  checkAnswer(strike) {
    if (strike === ANSWER) {
      this.printMessage(WIN_MESSAGE);
      this.askReGame();
    } else {
      this.tryGetAnswer();
    }
  }

  async tryGetAnswer() {
    this.userNumber = this.inputNumber(INPUT_NUMBER_MESSAGE);
    this.userNumberException();

    const strike = this.countStrike();
    const ball = this.countBall();
    this.printResult(ball, strike);

    this.checkAnswer(strike);
  }

  startNewGame() {
    this.generateComputerNumber();
    this.tryGetAnswer();
  }

  play() {
    this.printMessage(START_MESSAGE);
    this.startNewGame();
  }
}

module.exports = App;
