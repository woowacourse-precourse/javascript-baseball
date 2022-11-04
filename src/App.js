class App {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
    this.missionConsole = require("@woowacourse/mission-utils").Console;
  }
  play() {
    return this.makeRandomNumbers();
  }

  makeRandomNumbers() {
    const computerInputNumbersArray = [];
    while (computerInputNumbersArray.length < 3) {
      const eachNumber = this.missionRandom.pickNumberInRange(1, 9);
      if (!computerInputNumbersArray.includes(eachNumber)) {
        computerInputNumbersArray.push(eachNumber);
      }
    }
    return computerInputNumbersArray.join("");
  }

  getUserInput() {
    this.missionConsole.readLine("숫자를 입력해주세요 : ", (userInputNumbers) => {
      this.missionConsole.print(userInputNumbers);
    });
  }
}
const app = new App();
app.play();

module.exports = App;
