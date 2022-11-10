// 모듈 선언
const { Random } = require('@woowacourse/mission-utils');
const { INPUT_LENGTH, START_DIGIT, END_DIGIT } = require('./constants/gameSetting');
const { isBall, isStrike } = require('./util/gameProcess');

class Computer {
  #baseBallDigit;

  setRandomDigit () {
    const randomDigit = new Set();
    while (randomDigit.size < INPUT_LENGTH) {
      randomDigit.add(Random.pickNumberInRange(START_DIGIT, END_DIGIT));
    }
    this.#baseBallDigit = Array.from(randomDigit);
  }

  calcBaseBallDigit (userDigit) {
    const randomDigit = this.#baseBallDigit;
    const baseBallBoard = {
      strike: 0,
      ball: 0,
    };
    userDigit.forEach((digit, idx) => {
      if (isBall({ randomDigit, digit, idx })) baseBallBoard.ball += 1;
      else if (isStrike({ randomDigit, digit, idx })) baseBallBoard.strike += 1;
    });
    return baseBallBoard;
  }
}

module.exports = Computer;
