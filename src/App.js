const MissionUtils = require('@woowacourse/mission-utils');
const Constants = require('./constant');

class App {
  constructor() {
    this.computerNumber = null;
    this.userNumber = null;
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  generateComputerNumber() {
    const computerNumber = [];

    while (computerNumber.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computerNumber.includes(randomNumber)) {
        computerNumber.push(randomNumber);
      }
    }

    this.computerNumber = computerNumber;
  }

  input(message) {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine(message, resolve);
    });
  }

  async inputNumber(message) {
    const number = await this.input(message);

    return [...number].map((num) => Number(num));
  }

  isNumber() {
    for (let number of this.userNumber) {
      if (!(1 <= number && number <= 9)) {
        throw new Error('유효한 숫자가 아닙니다');
      }
    }

    return true;
  }

  isLength3() {
    if (this.userNumber.length !== 3) throw new Error('길이가 3이 아닙니다');
  }

  isDuplicated() {
    const userNumberSet = new Set(this.userNumber);

    if (userNumberSet.size !== this.userNumber.length)
      throw new Error('중복된 숫자가 있습니다');
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

    if (ball) result += `${ball}볼`;

    if (strike) result += ` ${strike}스트라이크`;

    if (result === ``) result += `낫싱`;

    MissionUtils.Console.print(result.trim());
  }

  selectedNumberException(selectedNumber) {
    if (!(selectedNumber === 1 || selectedNumber === 2)) {
      throw new Error('유효한 숫자가 아닙니다');
    }
  }

  async askReGame() {
    const selectedNumber = Number(
      await this.inputNumber(Constants.REGAME_MESSAGE)
    );
    this.selectedNumberException(selectedNumber);

    if (selectedNumber === 1) this.startNewGame();

    if (selectedNumber === 2) MissionUtils.Console.close();
  }

  checkAnswer(strike) {
    if (strike === 3) {
      this.printMessage(Constants.WIN_MESSAGE);
      this.askReGame();
    } else {
      this.tryGetAnswer();
    }
  }

  async tryGetAnswer() {
    this.userNumber = await this.inputNumber(Constants.INPUT_NUMBER_MESSAGE);
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
    this.printMessage(Constants.START_MESSAGE);
    this.startNewGame();
  }
}

module.exports = App;
