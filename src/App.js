const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #computerNumber;

  #userNumber;

  #numberSize;

  #strike;

  #ball;

  constructor(numberSize = 3) {
    this.#numberSize = numberSize;
    this.#computerNumber = null;
    this.#userNumber = null;
    this.#strike = 0;
    this.#ball = 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNumber();
    console.log(this.getComputerNumber());
    this.progressGame();
    // MissionUtils.Console.close();
  }

  progressGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      this.setUserNumber(number);
      this.compareNumbers();
      this.printCompareResult();
    });
  }

  makeRandomNumber() {
    const computer = [];
    while (computer.length < this.getNumberSize()) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    this.setComputerNumber(computer.join(''));
  }

  compareNumbers() {
    const computerNumber = this.getComputerNumber();
    const userNumber = this.getUserNumber();
    const notStrikePositions = [];
    const notStrikeNumbers = {};

    [...computerNumber].forEach((number, index) => {
      if (number === userNumber[index]) {
        this.setStrike(this.getStrike() + 1);
        return;
      }
      if (notStrikeNumbers[number] === undefined) {
        notStrikeNumbers[number] = 0;
      }

      notStrikeNumbers[number] += 1;
      notStrikePositions.push(index);
    });

    notStrikePositions.forEach((position) => {
      if (notStrikeNumbers[userNumber[position]] === 0) return;
      if (notStrikeNumbers[userNumber[position]] === undefined) return;

      notStrikeNumbers[userNumber[position]] -= 1;
      this.setBall(this.getBall() + 1);
    });
  }

  printCompareResult() {
    this.getComputerNumber();
    if (this.getBall() === 0 && this.getStrike() === 0) {
      MissionUtils.Console.print('낫싱');
      return;
    }
    if (this.getBall() === 0 && this.getStrike() !== 0) {
      MissionUtils.Console.print(`${this.getStrike()}스트라이크`);
      return;
    }

    if (this.getBall() !== 0 && this.getStrike() === 0) {
      MissionUtils.Console.print(`${this.getBall()}볼`);
      return;
    }

    MissionUtils.Console.print(
      `${this.getBall()}볼 ${this.getStrike()}스트라이크`
    );
  }

  setNumberSize(size) {
    this.#numberSize = size;
  }

  getNumberSize() {
    return this.#numberSize;
  }

  setUserNumber(number) {
    this.#userNumber = number;
  }

  getUserNumber() {
    return this.#userNumber;
  }

  setComputerNumber(number) {
    this.#computerNumber = number;
  }

  getComputerNumber() {
    return this.#computerNumber;
  }

  setBall(ball) {
    this.#ball = ball;
  }

  getBall() {
    return this.#ball;
  }

  setStrike(strike) {
    this.#strike = strike;
  }

  getStrike() {
    return this.#strike;
  }
}

const app = new App();
app.play();

module.exports = App;
