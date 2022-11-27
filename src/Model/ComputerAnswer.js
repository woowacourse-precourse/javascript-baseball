const { Random } = require('@woowacourse/mission-utils');

class ComputerAnswer {
  #value;

  constructor() {
    this.#setValue();
  }

  #setValue() {
    const numberArr = [];
    while (numberArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) numberArr.push(number);
    }

    this.#value = Number(numberArr.join(''));
  }

  resetValue() {
    this.#setValue();
  }

  // 메서드 명이 최선인가?
  // 볼과 스트라이크의 개수를 리턴하는 다른 메서드를 만드는 것이 좋은가?
  // 좋다면 그 메서드명은 무엇이 좋은가?
  comparePlayerAnswer(playerAnswer) {
    let ballCount = 0;
    let strikeCount = 0;

    [...playerAnswer].forEach((number, idx) => {
      if (![...(this.#value + '')].includes(number)) return;

      if ((this.#value + '')[idx] === number) strikeCount += 1;
      else ballCount += 1;
    });

    return { ballCount, strikeCount };
  }
}

module.exports = ComputerAnswer;
