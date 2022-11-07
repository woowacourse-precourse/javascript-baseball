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

  validateInput(userInput) {
    return (
      userInput.length === 3 &&
      Boolean(userInput.match(/^[1-9]+$/)) &&
      new Set(userInput.split('')).size === 3
    );
  }

  getUserNumber() {
    Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      if (!this.validateInput(userInput)) {
        throw new Error('유효하지 않은 값이 입력되어 게임이 종료됩니다.');
      }
    });
  }
}

module.exports = Computer;
