const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.threeDigitsAnswer = [];
  }

  getThreeDigitsAnswer() {
    while (this.threeDigitsAnswer.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);
      if (!this.threeDigitsAnswer.includes(randomNumber)) {
        this.threeDigitsAnswer.push(randomNumber);
      }
    }
  }

  init() {
    this.getThreeDigitsAnswer();
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    this.init();
  }
}

const app = new App();
app.play();

module.exports = App;
