const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.targetNumber = [];
    this.userNumber = [];
    this.ball = 0;
    this.strike = 0;
  }

  init() {
    const numbers = new Set();
    while (numbers.size < 3) {
      numbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    this.targetNumber = [...numbers];
  }

  inputUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      this.userNumber = answer.split('').map(Number);

      if (
        this.userNumber.includes(NaN) || this.userNumber.includes(0)
        || new Set(this.userNumber).size !== 3
      ) {
        throw new Error('Invalid input');
      }
    });
  }

  calcResult() {
    this.ball = 0;
    this.strike = 0;
    this.targetNumber.forEach((num, idx) => {
      const cur = this.userNumber.indexOf(num);

      if (cur === idx) {
        this.strike += 1;
      } else if (cur !== -1) {
        this.ball += 1;
      }
    })
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
    this.inputUserNumber();
    this.calcResult();
    this.printResult();

    if (this.strike < 3) this.guessingNumber();
  }

  confirmExit() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', 
      (answer) => {
        if (answer === '1') {
          this.init();
          this.guessingNumber();
        } else if (answer !== '2') {
          throw new Error('Invalid input');
        }
      },
    );
  }

  play() {
    this.init();
    this.guessingNumber();
    this.confirmExit();
  }
}

module.exports = App;
