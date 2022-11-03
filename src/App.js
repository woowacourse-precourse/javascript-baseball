const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.init();
  }

  initUserInputInterface() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      Console.print(input);
    });
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
