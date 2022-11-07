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

class App {
  constructor() {
    this.answer = undefined;
    this.input = undefined;
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
    if (new Set(inputDigit) !== 3) {
      throw Object.assign(new Error(), { message: '잘못된 입력입니다. 서로 다른 3자리 수를 입력해주세요. ' });
    }
  }
}
const app = new App();
app.play();

module.exports = App;
