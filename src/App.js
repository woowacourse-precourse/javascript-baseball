const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.init();
  }

  initUserInputInterface() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.validateInput(input);
    });
  }

  validateInput(input) {
    if (input.length !== 3) {
      throw '올바른 입력 값이 아닙니다. 3자리 숫자가 아닙니다. 게임을 종료합니다.';
    }

    const set = new Set(input.split(''));
    if (input.length !== set.size) {
      throw '올바른 입력 값이 아닙니다. 중복된 숫자가 존재합니다. 게임을 종료합니다.';
    }
  }

  init() {
    this.initUserInputInterface();
  }

  generateRandomNumber() {
    const computer = [];
    while (computer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNumber)) {
        computer.push(randomNumber);
      }
    }
    this.answer = computer.join('');
  }
}

const app = new App();
app.play();

module.exports = App;
