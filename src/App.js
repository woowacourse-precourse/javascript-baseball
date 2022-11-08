const MissionUtils = require('@woowacourse/mission-utils');

const MAX_LENGTH = 3;

class App {
  constructor() {
    this.userNumber = [];
    this.computerNumber = [];
    this.countStrike = 0;
    this.countBall = 0;
    this.gameover = false;
  }

  createComputerNumber() {
    this.computerNumber = [];
    while (this.computerNumber.length < MAX_LENGTH) {
      this.computerNumber.push(MissionUtils.Random.pickNumberInRange(1, 9));
    }
  }

  play() { }

}

module.exports = App;
