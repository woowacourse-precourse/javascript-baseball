const { Console, Random } = require("./Utilitys");

class System {
  constructor() {
    this.numberArray;
  }

  set setNumber(numberArray) {
    this.numberArray = numberArray;
  }

  get getNumber() {
    return this.numberArray;
  }

  getStarted() {
    Console.print("숫자 야구 게임을 시작합니다.");
  }

  createAnswerNumber() {
    this.setNumber = Random.pickUniqueNumbersInRange(1, 10, 3);
  }

  isStrike(guessNumber) {
    const guessNumberArray = guessNumber
      .split("")
      .map((value) => parseInt(value));
    const correctNumberArray = this.getNumber;
    let scoreboard = { strike: 0, ball: 0 };

    guessNumberArray.forEach((value, index) => {
      if (correctNumberArray.includes(value)) {
        if (correctNumberArray[index] === value) scoreboard.strike++;
        else scoreboard.ball++;
      }
    });

    Console.print(`strike : ${scoreboard.strike}, ball : ${scoreboard.ball}`);
  }
}

module.exports = System;
