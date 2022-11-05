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

    this.responseGuessResult(scoreboard);
  }

  responseGuessResult(scoreboard) {
    if (!scoreboard[0] && !scoreboard[1]) {
      MissionUtils.Console.print("낫싱");
    } else if (!scoreboard[0]) {
      MissionUtils.Console.print(`${scoreboard[1]}볼`);
    } else if (!scoreboard[1]) {
      MissionUtils.Console.print(`${scoreboard[0]}스트라이크`);
      if (scoreboard[0] === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.isStartOverGame();
      }
    } else {
      MissionUtils.Console.print(
        `${scoreboard[1]}볼 ${scoreboard[0]}스트라이크`
      );
    }
  }

  isStartOverGame() {
    MissionUtils.Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    MissionUtils.Console.readLine("", (answer) => {
      // do something
    });
  }
}

module.exports = System;
