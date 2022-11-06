const MissionUtils = require("@woowacourse/mission-utils");

class Game {
  constructor() {
    this.computer = [];
  }

  setRandomNumber() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!this.computer.includes(number)) {
        this.computer.push(number);
      }
    }

    return this.computer;
  }

  compareNumber(computer, player) {}

  isValidNumber(number) {}

  start(randomNumber) {}

  over() {}
}

module.exports = Game;
