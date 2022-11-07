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
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNumber();
    this.progressGame();
  }

  progressGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      this.setUserNumber(number);
      this.compareNumbers();
      this.printCompareResult();
      if (this.getBall() === 0 && this.getStrike() === this.getNumberSize()) {
        this.finishGame();
        return;
      }
      this.progressGame();
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

    this.setBall(0);
    this.setStrike(0);

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

  finishGame() {
    MissionUtils.Console.print(
      `${this.getNumberSize()}개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. : ',
      (number) => {
        if (number === '1') {
          this.makeRandomNumber();
          this.progressGame();
        } else {
          MissionUtils.Console.close();
        }
      }
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
