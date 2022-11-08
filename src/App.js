const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computerNumber = null;
  }

  start() {
    this.computerNumber = this.getRandomComputerNumber();
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  getInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.validCheckInputNumber(input);
    });
  }

  getRandomComputerNumber() {
    this.randomArray = [];
    while (this.randomArray.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.randomArray.includes(randomNumber)) {
        this.randomArray.push(randomNumber);
      }
    }
    return this.randomArray.join('');
  }

  validCheckInputNumber(input) {
    if (!String(input).match(/[1-9]/g) || new Set(input).size !== 3 || input.length !== 3) {
      throw Error('정확한 값을 입력하세요.');
    } else { this.getInterimOutcome(input); }
  }

  getInterimOutcome(input) {
    const BALL = this.getBall(input);
    const STRIKE = this.getStrike(input);
    if (STRIKE === 3) {
      this.getAnswer();
    } else if (BALL && !STRIKE) {
      MissionUtils.Console.print(`${BALL}볼`);
      this.getInputNumber();
    } else if (!BALL && STRIKE) {
      MissionUtils.Console.print(`${STRIKE}스트라이크`);
      this.getInputNumber();
    } else if (BALL && STRIKE) {
      MissionUtils.Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
      this.getInputNumber();
    } else if (!BALL && !STRIKE) {
      MissionUtils.Console.print('낫싱');
      this.getInputNumber();
    }
  }

  getBall(input) {
    let ball = 0;
    [].forEach.call(input, (num, idx) => {
      if (num !== this.computerNumber[idx] && this.computerNumber.includes(num)) {
        ball += 1;
        MissionUtils.Console.print(ball);
      }
    });
    return ball;
  }

  getStrike(input) {
    let strike = 0;
    [].forEach.call(input, (num, idx) => {
      if (num === this.computerNumber[idx]) {
        strike += 1;
        MissionUtils.Console.print(strike);
      }
    });
    return strike;
  }

  getAnswer() {
    MissionUtils.Console.print('3스트라이크');
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.questionRestart();
  }

  questionRestart() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (number) => {
        this.restart(number);
      },
    );
  }

  restart(input) {
    if (input === '1') {
      this.start();
      this.getInputNumber();
    }
    if (input === '2') {
      MissionUtils.Console.close();
    }
  }

  play() {
    this.start();
    this.getInputNumber();
  }
}

const app = new App();
MissionUtils.Console.print(app.play());

module.exports = App;
