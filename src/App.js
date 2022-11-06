const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.threeDigits = [0, 0, 0];
    this.userDigits = [0, 0, 0];
    this.score = { strikes: 0, balls: 0 };
  }

  generateThreeDigits() {
    this.threeDigits = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }

  getUserDigits() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      this.checkInputValidity(userInput);
      this.userDigits = [...userInput];
    });
  }

  checkInputValidity(userInput) {
    if (userInput != parseInt(userInput) || userInput.length !== 3) {
      throw new Error("input should be three digits");
    }
  }

  countScore() {
    for (let i = 0; i < 3; i++) {
      if (this.threeDigits[i] === this.userDigits[i]) {
        this.score.strikes += 1;
      } else if (this.threeDigits.includes(this.getUserDigits[i])) {
        this.score.strikes += 1;
      }
    }
  }

  printScore() {
    let scoreSentence = "";
    if (this.score.balls) {
      scoreSentence += `${this.score.balls}볼`;
    }
    if (this.score.strikes) {
      if (scoreSentence) {
        scoreSentence += " ";
      }
      scoreSentence += `${this.score.strikes}스트라이크`;
    }
    if (!scoreSentence) {
      scoreSentence = "낫싱";
    }
    MissionUtils.Console.print(scoreSentence);
  }

  play() {
    this.generateThreeDigits();
    this.getUserDigits();
    this.countScore();
    this.printScore();
  }
}

module.exports = App;
