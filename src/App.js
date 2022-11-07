const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor(answer) {
    this.answer = answer;
  }

  startGame() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  createRandom() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    this.answer = numbers;
  }

  play() {
    this.startGame();
    this.createRandom();
  }
}

module.exports = App;
