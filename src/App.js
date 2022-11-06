const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.start();
    this.createComputerNumber();
    this.input();
  }

  input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const user = answer.split('').map((num) => parseInt(num, 10));
      const inputState = this.checkInputValidation(answer);
      this.checkState(inputState, false);
      const state = this.result(user, this.computer);
      this.checkState(state, true);
    });
  }

  restart() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (answer) => {
        const state = this.checkInputValidation(answer);
        this.checkState(state, true);
      }
    );
  }

  checkState(state, isGameover) {
    const token = ['RESTART', 'EXIT', 'GUESS_SUCCESSFUL'];
    if (!isGameover && token.includes(state)) throw Error('잘못된 입력입니다.');
    switch (state) {
      case 'EXIT':
        this.print('게임 종료');
        MissionUtils.Console.close();
        break;
      case 'RESTART':
        this.createComputerNumber();
        this.input();
        break;
      case 'GUESS_SUCCESSFUL':
        this.restart();
        break;
      case 'GUESS_FAIL':
        this.input();
        break;
      case 'SUCCESS':
        break;
      default:
        throw Error('유효하지 않은 입력입니다.');
    }
  }

  start() {
    this.print('숫자 야구 게임을 시작합니다.');
  }

  createComputerNumber() {
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
    if (length === 1) return this.checkRestart(answer);
    if (length === 3) return 'SUCCESS';
    throw Error('에러');
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

  countStrike(user, computer) {
    let strike = 0;
    user.forEach((number, i) => {
      if (number === computer[i]) strike += 1;
    });
    return strike;
  }

  countBall(user, computer) {
    let ball = 0;
    user.forEach((number, i) => {
      if (computer.includes(number) && computer[i] !== number) ball += 1;
    });
    return ball;
  }

  getResult(user, computer) {
    const strike = this.countStrike(user, computer);
    const ball = this.countBall(user, computer);

    return { strike, ball };
  }

  correctAnswer() {
    this.print('3스트라이크');
    this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  result(user, computer) {
    const { strike, ball } = this.getResult(user, computer);
    if (strike === 3) {
      this.correctAnswer();
      return 'GUESS_SUCCESSFUL';
    }
    this.output(strike, ball);
    return 'GUESS_FAIL';
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
