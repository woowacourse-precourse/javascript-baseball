const { Random, Console } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.offerComputerRandomNumbers();
    this.userInputNumbers;
  }

  offerComputerRandomNumbers() {
    this.computerNumbers = Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  play() {
    this.gameStart();
  }
  gameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

const app = new App();
app.play();

module.exports = App;
