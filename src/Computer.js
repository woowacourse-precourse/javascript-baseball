const { Console, Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./Message');
const { setGameInputError, newGameInputError } = require('./Error');

class Computer {
  constructor() {
    this.answerNumber = this.initNumber();
    this.resultMap;
  }

  computeMatchInput(inputNumber) {
    const resultMap = {
      ball: 0,
      strike: 0,
    };

    [...inputNumber].forEach((digit, index) => {
      if (this.answerNumber[index] === digit) resultMap.strike += 1;
      else if ([...this.answerNumber].includes(digit)) resultMap.ball += 1;
    });

    this.resultMap = resultMap;
    return this;
  }

  getResultMessage() {
    if (this.resultMap.strike === 3) {
      return MESSAGE.ENDGAME;
    }

    if (this.resultMap.strike === 0 && this.resultMap.ball === 0) {
      return MESSAGE.NOTTHING;
    }

    const ballMessage = this.resultMap.ball !== 0 ? `${this.resultMap.ball}볼 ` : '';
    const strikeMessage = this.resultMap.strike !== 0 ? `${this.resultMap.strike}스트라이크` : '';
    return ballMessage + strikeMessage;
  }

  initNumber() {
    const randomNumbers = [Random.pickNumberInRange(1, 9)];

    while (randomNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (randomNumbers.includes(number)) {
        continue;
      }

      randomNumbers.push(number);
    }
    return randomNumbers.join('');
  }

  checkValidationSetGameInput(inputNumber) {
    if (!setGameInputError.isValid(inputNumber)) {
      Console.close();
      throw new Error(MESSAGE.ERROR);
    }
  }

  checkValidationNewGameInput(inputAnswer) {
    if (!newGameInputError.isValid(inputAnswer)) {
      Console.close();
      throw new Error(MESSAGE.ERROR);
    }
  }
}

module.exports = Computer;
