const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  play() {}

  MakeNum() {
    const randomNumber = [];
    while (randomNumber.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(number.toString())) {
        randomNumber.push(number.toString());
      }
    }
    return randomNumber;
  }
}

module.exports = App;
