const { Random } = require('@woowacourse/mission-utils');

class Computer {
  makeAnswer() {
    const randomNumList = [];
    while (randomNumList.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumList.includes(number)) {
        randomNumList.push(number);
      }
    }
    return randomNumList.join('');
  }
}

module.exports = Computer;
