const MissionUtils = require("@woowacourse/mission-utils");

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

  responseSendNumber() {
    MissionUtils.Console.readLine("", (answer) => {
      let number = answer.split("");
      this.setGuessNumber = number;
      console.log(this.getGuessNumber);
    });
  }
}

module.exports = User;
