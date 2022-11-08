class App {

  constructor() {
    this.answer = [];
  }

  play() {
  }

  generateAnswer() {
    const MissionUtils = require("@woowacourse/mission-utils");
    while (this.answer.length < 3) {
      let randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.answer.indexOf(randomNum) === -1) this.answer.push(randomNum);
    }
  }

  
}

const app = new App;
app.play();

module.exports = App;
