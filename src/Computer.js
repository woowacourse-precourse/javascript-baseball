const { Console, Random } = require('@woowacourse/mission-utils');

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

  getUserNumber() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {});
  }
}

module.exports = Computer;
