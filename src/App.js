const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.answerNumbers = this.getRandomNumbers();
  }

  getRandomNumbers() {
    const deduplicateRandomNumbers = [];

    while (deduplicateRandomNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!deduplicateRandomNumbers.includes(randomNumber)) {
        deduplicateRandomNumbers.push(randomNumber);
      }
    }
    return deduplicateRandomNumbers;
  }

  play() {
    MissionUtils.Console.print(Message.gameStart);
  }
}

const app = new App();
app.play();

module.exports = App;
