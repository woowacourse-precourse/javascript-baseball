const MissionUtils = require("@woowacourse/mission-utils");

class App {
  /* 랜덤 숫자 추출 */
  pickRandomNumbers() {
    const numbers = [];
    while (numbers.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) numbers.push(number);
    }

    return numbers;
  }

  /* 게임 플레이 */
  play() {
    const numbers = this.pickRandomNumbers();
    // console.log(numbers);
  }
}

const app = new App();
app.play();

module.exports = App;
