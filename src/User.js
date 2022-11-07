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

  isReplay() {
    Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
    return Console.readLine("");
  }
}

module.exports = User;
