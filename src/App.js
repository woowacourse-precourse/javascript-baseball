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

  async startRound() {
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

  validateInput(input) {
    if (input.length !== 3) return false;
    if (new Set(input.split("")).size !== 3) return false;
    if (isNaN(input)) return false;

    return true;
  }
}

const app = new App();
app.play();

module.exports = App;
