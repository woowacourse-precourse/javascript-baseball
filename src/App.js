const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.answer = undefined;
    this.input = undefined;
    this.ball = 0;
    this.strike = 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.start();
  }

  static createAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('');
  }

  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', input => {
      this.input = input;
      return this.checkInput(this.input);
    });
  }

  checkInput(number) {
    if (Number.isNaN(parseFloat(number))) {
      throw Object.assign(new Error(), { message: '잘못된 입력입니다.숫자를 입력해주세요. ' });
    }
    if (number.length !== 3) {
      throw Object.assign(new Error(), { message: '잘못된 입력입니다. 3자리 수를 입력해주세요. ' });
    }
    const inputDigit = number.split('').map(Number);
    if (new Set(inputDigit).size !== 3 || number.includes('0')) {
      throw Object.assign(new Error(), { message: '잘못된 입력입니다. 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요. ' });
    }
    return this.getResult();
  }

  getResult() {
    this.ball = 0;
    this.strike = 0;
    if (this.answer === this.input) {
      MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return this.askRestart();
    }
    for (let index = 0; index < 3; index += 1) {
      this.countBallOrStrike(index);
    }
    this.printResult();
    return this.getUserInput();
  }

  countBallOrStrike(index) {
    if (this.answer[index] === this.input[index]) {
      this.strike += 1;
    } else if (this.answer.includes(this.input[index])) {
      this.ball += 1;
    }
  }

  printResult() {
    let message = '';
    if (this.ball === 0 && this.strike === 0) message = '낫싱';
    if (this.ball > 0) message += `${this.ball}볼`;
    if (this.ball > 0 && this.strike > 0) message += ' ';
    if (this.strike > 0) message += `${this.strike}스트라이크`;
    MissionUtils.Console.print(message);
  }

  askRestart() {
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('', select => {
      if (select === '1') {
        return this.start();
      }
      if (select === '2') {
        return App.end();
      }
      throw Object.assign(new Error(), { message: '잘못된 입력입니다. 1 또는 2만 입력 가능합니다.' });
    });
  }

  start() {
    this.answer = App.createAnswer();
    return this.getUserInput();
  }

  static end() {
    MissionUtils.Console.print('게임 종료');
    MissionUtils.Console.close();
  }
}
const app = new App();
app.play();

module.exports = App;
