const { Random } = require('@woowacourse/mission-utils');

class Computer {
  #Numbers;

  constructor() {
    this.resetComputer();
  }

  // Computer가 입력한 값을 출력하는 함수
  getComNums() {
    return this.#Numbers;
  }

  // Computer의 랜덤값을 초기화 하기 위한 함기
  resetComputer() {
    this.#Numbers = this.getRandomsNumStr(1, 9, 3);
  }

  // Computer의 랜덤값을 생성하는 함수
  getRandomsNumStr(start, end, size) {
    const randomNums = [];
    while (randomNums.length < size) {
      const nums = Random.pickNumberInRange(start, end);
      if (!randomNums.includes(nums)) randomNums.push(nums);
    }
    return randomNums;
  }
}

module.exports = Computer;
