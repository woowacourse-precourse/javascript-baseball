const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.createUniqueNumbers(1, 9, 3);
  }

  createUniqueNumbers(start, end, count) {
    const numberSet = new Set();

    while (numberSet.size !== count) {
      const number = Random.pickNumberInRange(start, end);
      if (!numberSet.has(number)) numberSet.add(number);
    }

    return [...numberSet];
  }
}

module.exports = App;
