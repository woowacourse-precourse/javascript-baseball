class App {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
    this.missionConsole = require("@woowacourse/mission-utils").Console;
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
    this.missionConsole.readLine("숫자를 입력해주세요 : ", (userInputNumbers) => {
      if (this.compareNumber(this.makeRandomNumbers(), userInputNumbers)) {
        this.missionConsole.print(this.compareNumber(this.makeRandomNumbers(), userInputNumbers));
      }
      this.missionConsole.close();
    });
  }

  compareNumber(pcInputNumbers, userInputNumbers) {
    if (+pcInputNumbers > +userInputNumbers) return "pc 승";
    if (+pcInputNumbers === +userInputNumbers) return "무승부";
    if (+pcInputNumbers < +userInputNumbers) return "유저 승";
    return "error";
  }
}
const app = new App();
app.play();

module.exports = App;
