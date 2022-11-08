const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  play() {
    const randomNumbers = this.generateRandomNumbers();
  }

  generateRandomNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 9);

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers.join("");
  }
}
const app = new App();
app.play();

module.exports = App;
