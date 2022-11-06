const MissionUtils = require("@woowacourse/mission-utils");

class App {
  answer;

  play() {}

  computerRandomNumber() {
    const nonDuplicateNumbers = [];
    while (nonDuplicateNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!nonDuplicateNumbers.includes(randomNumber)) {
        nonDuplicateNumbers.push(randomNumber);
      }
    }
    
    this.answer = Number(nonDuplicateNumbers.join(""));
    return this.answer;
  }
}

const app = new App();
app.play();

console.log(app.computerRandomNumber());

module.exports = App;