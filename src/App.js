const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.temp();
  }

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

  async temp() {
    const value = await this.readPlayerInput();
    console.log(value);
  }

  readPlayerInput() {
    return new Promise((resolve) => {
      MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
        resolve(input);
      });
    });
  }
}

const app = new App();
app.play();

module.exports = App;
