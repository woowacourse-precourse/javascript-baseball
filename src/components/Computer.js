const { Random } = require("@woowacourse/mission-utils");

class Computer {
  makeAnswer() {
    const randomNumArr = [];

    while (randomNumArr.length < 3) {
      const num = Random.pickNumberInRange(1, 9);
      if (!randomNumArr.includes(num)) randomNumArr.push(num);
    }

    return randomNumArr.join("");
  }
}

module.exports = Computer;
