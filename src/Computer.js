const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class Computer {
  constructor() {
    this.number = this.initNumber();
    this.inputNumber;
  }
  setInputNumber(inputNumber) {
    this.inputNumber = inputNumber;
    this.resultMap;
  }
  getResultMap() {
    const resultMap = {
      ball: 0,
      strike: 0,
    };

    [...this.inputNumber].forEach((digit) => {
      if (this.number.includes(digit)) {
        resultMap.ball += 1;
      }
    });

    for (let i = 0; i < 3; i++) {
      if (this.number[i] === this.inputNumber[i]) {
        resultMap.ball -= 1;
        resultMap.strike += 1;
      }
    }
    return resultMap;
  }

  computeResult(resultMap) {
    if (resultMap.strike === 3) {
      return '정답입니다.';
    }

    if (resultMap.strike === 0 && resultMap.ball === 0) {
      return '낫싱';
    }

    return `${resultMap.ball}볼 ${resultMap.strike}스트라이크 입니다.`;
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
}

module.exports = Computer;
