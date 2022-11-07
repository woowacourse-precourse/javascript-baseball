const MissionUtils = require("@woowacourse/mission-utils");
const System = require("./System");

class User {
  constructor() {
    this.guessNumber;
  }

  set setGuessNumber(guessNumber) {
    this.guessNumber = guessNumber;
  }

  get getGuessNumber() {
    return this.guessNumber;
  }
}

module.exports = User;
