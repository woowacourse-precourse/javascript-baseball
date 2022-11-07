const { Console, Random } = require('@woowacourse/mission-utils');

class Game {
  constructor() {
    this.correctNumber;
  }

  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.correctNumber = this.generateThreeDigitNumber();
    this.pitchNumber();
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

  pitchNumber() {
    Console.readLine('숫자를 입력해주세요 : ', (inputStr) => {
      const guess = this.isValidInput(inputStr);
    });
  }

  isValidInput(inputStr) {
    const inputArr = [...inputStr].map(Number);
    const inputSet = new Set(inputArr);
    if (!/^[1-9]{3}$/.test(inputStr) || inputSet.size !== 3) {
      throw new Error(
        '각 자리가 1부터 9까지 서로 다른 수로 이루어진 3자리 수를 입력하세요.'
      );
    }

    return inputArr;
  }
}

module.exports = Game;
