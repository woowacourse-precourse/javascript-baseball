const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

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

  computeResult(resultMap) {
    if (resultMap.strike === 3) {
      return '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
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
}

module.exports = Computer;
