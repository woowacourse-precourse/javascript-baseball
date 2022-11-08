// 모듈 선언
const { Random } = require('@woowacourse/mission-utils');
// 상수 선언
const INPUT_LENGTH = 3;
const START_DIGIT = 1;
const END_DIGIT = 9;

class Computer {
  #baseBallDigit;

  constructor() {
    this.#baseBallDigit = this.#setRandomDigit();
  }

  #setRandomDigit() {
    const randomDigit = new Set();
    while (randomDigit.size < INPUT_LENGTH)
      randomDigit.add(Random.pickNumberInRange(START_DIGIT, END_DIGIT));
    return Array.from(randomDigit);
  }

  #isBall({ randomDigit, digit, idx }) {
    return randomDigit.includes(digit) && randomDigit[idx] !== digit;
  }

  #isStrike({ randomDigit, digit, idx }) {
    return randomDigit.includes(digit) && randomDigit[idx] === digit;
  }

  calcBaseBallDigit(userDigit) {
    const randomDigit = this.#baseBallDigit;
    const baseBallBoard = {
      strike: 0,
      ball: 0,
    };
    userDigit.forEach((digit, idx) => {
      if (this.#isBall({ randomDigit, digit, idx })) baseBallBoard.ball++;
      else if (this.#isStrike({ randomDigit, digit, idx }))
        baseBallBoard.strike++;
    });
    return baseBallBoard;
  }
}

module.exports = Computer;
