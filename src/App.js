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
    if (this.validateInputLength(input)) return false;
    if (this.validateInputDuplication(input)) return false;
    if (isNaN(input)) return false;

    return true;
  }
  validateInputLength(input) {
    return input.length !== 3;
  }
  validateInputDuplication(input) {
    return new Set(input.split("")).size !== 3;
  }
  validateInputIsNaN(input) {
    let NaN = false;
    input.split("").forEach((eachChar) => {
      if (typeof eachChar !== "number") NaN = true;
    });

    return NaN;
  }
}

const app = new App();
app.play();

module.exports = App;
