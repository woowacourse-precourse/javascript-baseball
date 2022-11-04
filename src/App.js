const MissionUtils = require("@woowacourse/mission-utils");

class App {
  #computer = [];

  constructor() {
    while (this.#computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.#computer.includes(number)) {
        this.#computer.push(number);
      }
    }
  }

  getNumberFromPlayer() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) =>
      String(number)
    );
  }

  play() {}
}

const app = new App();
app.play();

module.exports = App;
