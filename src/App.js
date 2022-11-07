const MissionUtils = require('@woowacourse/mission-utils');

class App {
  #computerNumber;

  #userNumber;

  #numberSize;

  constructor(numberSize = 3) {
    this.#numberSize = numberSize;
    this.#computerNumber = null;
    this.#userNumber = null;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.makeRandomNumber();
    this.progressGame();
    // MissionUtils.Console.close();
  }

  progressGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (number) => {
      this.setUserNumber(number);
      const result = this.compareNumbers();
      console.log(result);
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
    let ball = 0;
    let strike = 0;

    if (computerNumber === userNumber) return [0, 3];

    [...computerNumber].forEach((number, index) => {
      if (number === userNumber[index]) {
        strike += 1;
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
      ball += 1;
    });

    return [ball, strike];
  }

  printCompareResult(result) {}

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
}

const app = new App();
app.play();

module.exports = App;
