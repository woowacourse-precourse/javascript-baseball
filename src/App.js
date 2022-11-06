const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computer = this.createUniqueNumbers(1, 9, 3);
    this.guess(computer);
  }

  createUniqueNumbers(start, end, count) {
    const numberSet = new Set();

    while (numberSet.size !== count) {
      const number = Random.pickNumberInRange(start, end);
      if (!numberSet.has(number)) numberSet.add(number);
    }

    return [...numberSet];
  }

  guess(computer) {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      const player = Array.from(input, Number);
    });
  }
}

module.exports = App;
