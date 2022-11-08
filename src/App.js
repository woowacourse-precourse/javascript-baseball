const MissionUtils = require("@woowacourse/mission-utils");
const getRandomNumbers = require("./getRandomNumbers");

class App {

  constructor() {
    this.firstEnter = true;
    this.computer = getRandomNumbers();
  }

  printOutput(answer) {
    let strike = 0;
    let ball = 0;

    answer.split('').forEach((number, index) => {
      const computer = String(this.computer[index]);
      if (computer === number) {
        strike += 1;
      }
      if (computer !== number && String(this.computer).includes(number)) {
        ball += 1;
      }
    });


    return compareNumbers(strike, ball);
  }

  play() { }
}


module.exports = App;