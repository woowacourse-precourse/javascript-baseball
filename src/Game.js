const { Console, Random } = require('@woowacourse/mission-utils');

class Game {
  constructor() {
    this.correctNumber;
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.correctNumber = this.generateThreeDigitNumber();
  }

  generateThreeDigitNumber() {
    const threeDigitNumber = [];
    while (threeDigitNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!threeDigitNumber.includes(number)) {
        threeDigitNumber.push(number);
      }
    }

    return threeDigitNumber;
  }
}

module.exports = Game;
