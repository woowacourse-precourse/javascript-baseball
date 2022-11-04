class App {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
    this.missionConsole = require("@woowacourse/mission-utils").Console;
    this.score = require("./play/GetScore");
  }
  play() {
    return this.getUserInput();
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
    const computerInputNumbers = this.makeRandomNumbers();

    this.missionConsole.readLine("숫자를 입력해주세요 : ", (userInputNumbers) => {
      console.log(computerInputNumbers, userInputNumbers);
      const scoreCount = new this.score(computerInputNumbers, userInputNumbers);
      this.missionConsole.print(scoreCount.compare());
      this.missionConsole.close();
    });
  }
}
const app = new App();
app.play();

module.exports = App;
