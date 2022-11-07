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
    this.setNumber = Random.pickUniqueNumbersInRange(1, 9, 3);
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

    return scoreboard;
  }

  notifyGuessResult(scoreboard) {
    if (scoreboard.strike) {
      Console.print(`${scoreboard.strike}스트라이크`);
      if (scoreboard.strike === 3) {
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      }
    }

    if (scoreboard.ball) {
      Console.print(`${scoreboard.ball}볼`);
    }

    if (!scoreboard.strike && !scoreboard.ball) {
      Console.print("낫싱");
    }
  }
}

module.exports = System;
