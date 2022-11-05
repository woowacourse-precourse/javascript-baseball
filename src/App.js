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
      this.command();
    }
  }

  start() {
    this.print('숫자 야구 게임을 시작합니다.');
  }

  input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      this.code = this.checkValidation(answer);
      this.user = answer.split('').map((num) => parseInt(num, 10));
    });
  }

  command() {
    switch (this.code) {
      case 'SUCCESS':
        this.output();
        break;
      case 'EXIT':
        this.exit = true;
        this.print('게임 종료');
        break;
      default:
        break;
    }
  }

  pickRandomNumber() {
    const pick = [];
    while (pick.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      pick.push(number);
    }
    this.computer = pick;
  }

  checkValidation(answer) {
    if (answer.split('').length > 3) throw Error('유효하지 않은 입력입니다.');

    switch (answer) {
      case '1':
        return VALIDATION_CODE[1];
      case '2':
        return VALIDATION_CODE[2];
      default:
        return VALIDATION_CODE[0];
    }
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

  victory() {
    this.print('3스트라이크');
    this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
  }

  output() {
    const { strike, ball } = this.compare();

    if (strike === 0 && ball === 0) this.print('낫싱');
    else if (strike === 3) {
      this.victory();
      this.pickRandomNumber();
    } else if (ball === 0) this.print(`${strike}스트라이크`);
    else if (strike === 0) this.print(`${ball}볼`);
    else this.print(`${ball}볼 ${strike}스트라이크`);
  }

  print(string) {
    MissionUtils.Console.print(string);
  }
}

module.exports = App;
