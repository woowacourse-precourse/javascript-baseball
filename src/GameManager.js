const { Random } = require('@woowacourse/mission-utils');

class GameManager {
  constructor() {
    this.answer = [];
    this.init();
  }

  init() {
    while (this.answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!this.answer.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  compare(userInputStr) {
    const userInputNum = userInputStr.map((input) => Number(input));
    let ballCount = 0;
    let strikeCount = 0;

    this.answer.forEach((number, index) => {
      if (userInputNum[index] === number) {
        strikeCount += 1;
        return;
      }

      if (userInputNum.includes(number)) {
        ballCount += 1;
      }
    });

    return { ballCount, strikeCount };
  }
}

module.exports = GameManager;
