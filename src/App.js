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
      if (!this.validateUserGuess(input)) {
        throw new Error('1부터 9까지 서로 다른 3자리 숫자를 입력해주세요.');
      }

      const player = Array.from(input, Number);
    });
  }

  validateUserGuess(input) {
    if (input.length !== 3) return false;

    const inputNumbers = Array.from(input, Number);
    if (inputNumbers.some((number) => !Number.isInteger(number))) return false;
    if (inputNumbers.some((number) => number === 0)) return false;

    const inputNumberSet = new Set(inputNumbers);
    if (inputNumberSet.size !== 3) return false;

    return true;
  }
}

module.exports = App;
