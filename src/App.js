class App {
  constructor() {
    this.missionRandom = require("@woowacourse/mission-utils").Random;
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
}
const app = new App();
app.play();

module.exports = App;
