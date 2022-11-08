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

  createUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      this.userNumber = input.split('').map(item => parseInt(item));
    })
  }

  count() {
    for (let i = 0; i < 3; i++) {
      this.checkMatch(this.userNumber[i], this.computerNumber[i])
    }
  }

  checkMatch(userNumber, computerNumber) {
    if (userNumber === computerNumber) this.countStrike++;
    else if (this.computerNumber.indexOf(userNumber) !== -1) this.countBall++;
  }

  play() { }

}

module.exports = App;
