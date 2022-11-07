const MissionUtils = require('@woowacourse/mission-utils');

function createAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer.join('');
}
function askRestart() {
  MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
}
class App {
  constructor() {
    this.answer = undefined;
    this.input = undefined;
    this.ball = 0;
    this.strike = 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.answer = createAnswer();
    return this.getUserInput();
  }

  getUserInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', input => {
      this.input = input;
      return this.checkInput();
    });
  }

  checkInput() {
    if (Number.isNaN(parseFloat(this.input))) {
      throw Object.assign(new Error(), { message: '잘못된 입력입니다.숫자를 입력해주세요. ' });
    }
    if (this.input.length !== 3) {
      throw Object.assign(new Error(), { message: '잘못된 입력입니다. 3자리 수를 입력해주세요. ' });
    }
    const inputDigit = this.input.split('').map(Number);
    if (new Set(inputDigit).size !== 3 || this.input.includes('0')) {
      throw Object.assign(new Error(), { message: '잘못된 입력입니다. 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력해주세요. ' });
    }
    return this.getResult();
  }

  getResult() {
    this.ball = 0;
    this.strike = 0;
    if (this.answer === this.input) {
      MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다!');
      return askRestart();
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
}
const app = new App();
app.play();

module.exports = App;
