const { Console } = require("./Utilitys");

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

  enterGuessNumber() {
    return Console.readLine("숫자를 입력해주세요 : ");
  }
}

module.exports = User;
