const { Random } = require('@woowacourse/mission-utils');

class Computer {
  static createUniqueNumbers(start, end, count) {
    Computer.#validateUniqueNumbers(start, end, count);

    const numberSet = new Set();

    while (numberSet.size !== count) {
      const number = Random.pickNumberInRange(start, end);
      if (!numberSet.has(number)) numberSet.add(number);
    }

    return [...numberSet];
  }

  static #validateUniqueNumbers(start, end, count) {
    if (
      !Number.isInteger(start) ||
      !Number.isInteger(end) ||
      !Number.isInteger(count)
    ) {
      throw new Error('인수는 정수여야 합니다.');
    }

    if (start > end) {
      throw new Error('start가 end보다 커서는 안됩니다.');
    }

    if (count < 0) {
      throw new Error('count는 0보다 작으면 안됩니다.');
    }

    if (count > end - start + 1) {
      throw new Error(
        `count: ${count}가 input 범위 (end - start + 1): ${end - start + 1}보다 커서는 안됩니다.`
      );
    }
  }
}

module.exports = Computer;
