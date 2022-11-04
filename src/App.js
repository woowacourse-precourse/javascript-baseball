const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}

  drawThreeRandomNumbers() {
    const threeRandomNumber = new Set();

    while (threeRandomNumber.size < 3) {
      const newNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      threeRandomNumber.add(newNumber);
    }

    return [...threeRandomNumber].join("");
  }

  printGameStartPhrase() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();
app.play();

module.exports = App;
