// 모듈 선언
const { Console, Random } = require('@woowacourse/mission-utils');
// 상수 선언
const INPUT_LENGTH = 3;
const START_DIGIT = 1;
const END_DIGIT = 9;

class App {
  setRandomDigit() {
    const randomDigit = new Set();
    while (randomDigit.size < INPUT_LENGTH) {
      randomDigit.add(Random.pickNumberInRange(START_DIGIT, END_DIGIT));
    }
    return Array.from(randomDigit);
  }

  showStartMessage() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() {
    this.showStartMessage();
  }
}

const app = new App();
app.play();

module.exports = App;
