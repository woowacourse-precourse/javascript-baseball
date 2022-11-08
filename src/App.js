const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
  // 랜덤 숫자 추출
  randomPickNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.randomPickNumbers(1, 9);
      if (!numbers.includes(number)) numbers.push(number);
    }

    return numbers;
  }

  // 게임
  play() {
    const numbers = this.randomPickNumbers();
  }
}

module.exports = App;
const app = new App();
app.play();

module.exports = App;