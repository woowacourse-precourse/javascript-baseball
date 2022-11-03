const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.targetNumber = [];
    this.userNumber = [];
    this.ball = 0;
    this.strike = 0;
  }

  resetTargetNumber() {
    this.targetNumber = [];
    while (this.targetNumber.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.targetNumber.includes(number)) {
        this.targetNumber.push(number);
      }
    }
  }

  getUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.userNumber = answer.split('').map(Number);

      if (this.userNumber.includes(NaN) || new Set(this.userNumber).size !== 3) {
        throw 'Invalid input';
      }
    });
  }

  calcResult() {
    this.ball = 0;
    this.strike = 0;
    for (let i = 0; i < this.targetNumber.length; i++) {
      const idx = this.userNumber.indexOf(this.targetNumber[i]);

      if (idx === i) {
        this.strike += 1;
      } else if (idx !== -1) {
        this.ball += 1;
      }
    }
  }

  printResult() {
    let result = '';

    if (this.ball > 0) result += `${this.ball}볼 `;
    if (this.strike > 0) result += `${this.strike}스트라이크`;
    if (this.strike === 3) result += '\n3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    if (result.length === 0) result += '낫싱';

    MissionUtils.Console.print(result);
  }

  guessingNumber() {
    this.getUserNumber();
    this.calcResult();
    this.printResult();

    if (this.strike < 3) this.guessingNumber();
  }

  confirmExit() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      if (answer === '1') {
        this.resetTargetNumber();
        this.guessingNumber();
      } else if (answer !== '2') {
        throw('Invalid input');
      }
    });
  }

  play() {
    this.resetTargetNumber();
    this.guessingNumber();
    this.confirmExit();
  }
}

module.exports = App;
