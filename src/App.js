const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.state = '';
    this.user = '';
    this.computer = '';
  }

  play() {
    this.start();
    this.pickRandomNumber();
    while (this.state !== 'EXIT') {
      this.input('숫자를 입력해주세요.');
      this.result();
      this.checkState();
    }
  }

  checkState() {
    switch (this.state) {
      case 'EXIT':
        this.print('게임 종료');
        MissionUtils.Console.close();
        break;
      case 'RESTART':
        this.pickRandomNumber();
        break;
      default:
        break;
    }
  }

  setState(nextState) {
    this.state = nextState;
  }

  start() {
    this.print('숫자 야구 게임을 시작합니다.');
  }

  input(message) {
    MissionUtils.Console.readLine(message, (answer) => {
      this.user = answer.split('').map((num) => parseInt(num, 10));
      this.checkInputValidation(answer);
    });
  }

  pickRandomNumber() {
    const pick = [];
    while (pick.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!pick.includes(number)) pick.push(number);
    }
    this.computer = pick;
  }

  checkInputValidation(answer) {
    const { length } = answer.split('');
    // 길이가 1이면 게임 종료 후 재시작/종료(1 or 2)인지 체크
    if (length === 1) this.setState(this.checkRestart(answer));
    else if (length === 3) this.setState('SUCCESS');
    else throw Error('에러');
  }

  checkRestart(answer) {
    switch (answer) {
      case '1':
        return 'RESTART';
      case '2':
        return 'EXIT';
      default:
        throw Error('잘못된 입력입니다.');
    }
  }

  countStrike() {
    let strike = 0;
    this.user.forEach((number, i) => {
      if (number === this.computer[i]) strike += 1;
    });
    return strike;
  }

  countBall() {
    let ball = 0;
    this.user.forEach((number, i) => {
      if (this.computer.includes(number) && this.computer[i] !== number)
        ball += 1;
    });
    return ball;
  }

  compare() {
    const strike = this.countStrike();
    const ball = this.countBall();
    return { strike, ball };
  }

  victory() {
    this.print('3스트라이크');
    this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.state = 'WIN';
  }

  result() {
    const { strike, ball } = this.compare();
    if (strike === 3) {
      this.victory();
      this.input('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    } else this.output(strike, ball);
  }

  output(strike, ball) {
    if (strike === 0 && ball === 0) this.print('낫싱');
    else if (strike === 0) this.print(`${ball}볼`);
    else if (ball === 0) this.print(`${strike}스트라이크`);
    else this.print(`${ball}볼 ${strike}스트라이크`);
  }

  print(string) {
    MissionUtils.Console.print(string);
  }
}

const app = new App();
app.play();

module.exports = App;
