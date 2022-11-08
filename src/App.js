const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  play() { }

  createComputerNumber() {
    const computerNumber = new Set();

    while (computerNumber.size < 3) {
      computerNumber.add(Random.pickNumberInRange(1, 9));
    }

    return [...computerNumber];
  }
}

module.exports = App;
