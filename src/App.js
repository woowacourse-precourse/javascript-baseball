const MissionUtils = require('@woowacourse/mission-utils');

const VALIDATION_CODE = ['SUCCESS', 'RESTART', 'EXIT'];

class App {
  constructor() {
    this.exit = false;
    this.code = null;
    this.user = '';
    this.computer = '';
  }

  play() {
    this.pickRandomNumber();
    while (!this.exit) {
      this.start();
      this.input();
      console.log('게임 시작!', 'user', this.user, 'com', this.computer);

      switch (this.code) {
        case 'RESTART':
          break;
        case 'SUCCESS':
          this.result();
          break;
        case 'EXIT':
          this.exit = true;
          MissionUtils.Console.print('게임 종료.');
          break;
        default:
          break;
      }
    }
  }

  start() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }

  pickRandomNumber() {
    const pick = [];
    while (pick.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      pick.push(number);
    }
    this.computer = pick;
  }

  input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      this.code = this.checkValidation(answer);
      this.user = answer.split('').map((num) => parseInt(num, 10));
      console.log('user', this.user, this.computer, this.code);
    });
  }

  checkValidation(answer) {
    if (answer.split('').length > 3) throw Error('유효하지 않은 입력입니다.');
    else if (answer === '1') return VALIDATION_CODE[1];
    else if (answer === '2') return VALIDATION_CODE[2];
    else return VALIDATION_CODE[0];
  }

  checkStrike() {
    let strike = 0;
    this.user.forEach((number, i) => {
      if (number === this.computer[i]) strike += 1;
    });
    return strike;
  }

  checkBall() {
    let ball = 0;
    this.user.forEach((number, i) => {
      if (this.computer.includes(number) && this.computer[i] !== number)
        ball += 1;
    });
    return ball;
  }

  compare() {
    const strike = this.checkStrike();
    const ball = this.checkBall();
    return { strike, ball };
  }

  result() {
    const { strike, ball } = this.compare();

    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
    } else if (strike === 3) {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.pickRandomNumber();
    } else if (ball === 0) MissionUtils.Console.print(`${strike}스트라이크`);
    else if (strike === 0) MissionUtils.Console.print(`${ball}볼`);
    else MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
  }
}

module.exports = App;
