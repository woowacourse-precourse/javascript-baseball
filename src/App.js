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
      this.userDigits = [...userInput].map(Number);
      this.countScore();
      this.printScore();
      this.isGameOver();
    });
  }

  checkInputValidity(userInput) {
    if (userInput != parseInt(userInput) || userInput.length !== 3) {
      throw new Error("input should be three digits");
    }
  }

  countScore() {
    this.score.strikes = 0;
    this.score.balls = 0;

    for (let i = 0; i < 3; i++) {
      if (this.threeDigits[i] === this.userDigits[i]) {
        this.score.strikes += 1;
      } else if (this.threeDigits.includes(this.userDigits[i])) {
        this.score.balls += 1;
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

  isGameOver() {
    if (this.score.strikes === 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      return this.askNewGame();
    }
    return this.getUserDigits();
  }

  askNewGame() {
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (userInput) => {
        if (userInput === "1") {
          return this.play();
        }
        return this.finishGame();
      }
    );
  }

  finishGame() {
    MissionUtils.Console.print("숫자 야구 게임이 종료되었습니다.");
    return MissionUtils.Console.close();
  }

  play() {
    this.generateThreeDigits();
    this.getUserDigits();
  }
}

const app = new App();
app.play();

module.exports = App;
