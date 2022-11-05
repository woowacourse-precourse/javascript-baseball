const MissionUtils = require("@woowacourse/mission-utils");

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
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  chooseNumber() {
    const numberArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.setNumber = numberArray;
    console.log(this.getNumber);
  }

  isStrike(guessNumber) {
    let guessNumberArray = guessNumber
      .split("")
      .map((value) => parseInt(value));
    let answerNumberArray = this.getNumber;
    let scoreboard = [0, 0]; // [strike, ball]

    guessNumberArray.forEach((value, index) => {
      if (answerNumberArray.includes(value)) {
        if (answerNumberArray[index] === value) scoreboard[0]++;
        else scoreboard[1]++;
      }
    });

    console.log(`strike : ${scoreboard[0]}, ball: ${scoreboard[1]}`);
  }
}

module.exports = System;
