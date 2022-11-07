const { Console, Random } = require('@woowacourse/mission-utils');
const MESSAGE = require('./Message');
const { setGameInputError, newGameInputError } = require('./Error');

class Computer {
  constructor() {
    this.number = this.initNumber();
  }
  getResultMap(inputNumber) {
    const resultMap = {
      ball: 0,
      strike: 0,
    };

    [...inputNumber].forEach((digit) => {
      if (this.number.includes(digit)) {
        resultMap.ball += 1;
      }
    });

    for (let i = 0; i < 3; i++) {
      if (this.number[i] === inputNumber[i]) {
        resultMap.ball -= 1;
        resultMap.strike += 1;
      }
    }
    return resultMap;
  }

  getResultMessage(resultMap) {
    if (resultMap.strike === 3) {
      return MESSAGE.ENDGAME;
    }

    if (resultMap.strike === 0 && resultMap.ball === 0) {
      return '낫싱';
    }

    const message = '입니다.';
    const ballMessage = resultMap.ball !== '0' ? `${resultMap.ball}볼 ` : '';
    const strikeMessage = resultMap.strike !== '0' ? `${resultMap.strike}스트라이크` : '';
    return ballMessage + strikeMessage + message;
  }

  initNumber() {
    const container = [Random.pickNumberInRange(1, 9)];
    while (container.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (container.includes(number)) {
        continue;
      }
      container.push(number);
    }
    return container.join('');
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
