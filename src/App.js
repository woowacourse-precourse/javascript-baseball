const { Console, Random } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.NEW_GAME = "1";
    this.DIGITS_LENGTH = 3;
    this.computerDigits = [];
    this.score = { strikes: 0, balls: 0 };
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.startNewGame();
  }

  startNewGame() {
    this.generateComputerDigits();
    this.playTurn();
  }

  generateComputerDigits() {
    const randomDigits = [];
    while (randomDigits.length < this.DIGITS_LENGTH) {
      const newDigit = Random.pickNumberInRange(1, 9);
      if (!randomDigits.includes(newDigit)) {
        randomDigits.push(newDigit);
      }
    }
    this.computerDigits = randomDigits;
  }

  playTurn() {
    Console.readLine("숫자를 입력해주세요 : ", (userInput) => {
      this.checkUserDigitsValidity(userInput);
      const userDigits = [...userInput].map(Number);
      return this.referee(userDigits);
    });
  }

  checkUserDigitsValidity(userInput) {
    if (
      userInput != parseInt(userInput, 10) ||
      userInput.length !== this.DIGITS_LENGTH
    ) {
      throw new Error("input should be three digits");
    }
  }

  referee(userDigits) {
    this.countScore(userDigits);
    this.printScore();
    return this.checkGameOver() ? this.askNewGame() : this.playTurn();
  }

  countScore(userDigits) {
    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < this.DIGITS_LENGTH; i++) {
      if (this.computerDigits[i] === userDigits[i]) {
        strikes += 1;
      } else if (this.computerDigits.includes(userDigits[i])) {
        balls += 1;
      }
    }
    this.score.strikes = strikes;
    this.score.balls = balls;
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
    Console.print(scoreSentence);
  }

  checkGameOver() {
    if (this.score.strikes === this.DIGITS_LENGTH) {
      Console.print(
        `${this.DIGITS_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
      return true;
    }
    return false;
  }

  askNewGame() {
    Console.readLine(
      `게임을 새로 시작하려면 ${this.NEW_GAME}, 종료하려면 2를 입력하세요.\n`,
      (userInput) => {
        if (userInput === this.NEW_GAME) {
          return this.startNewGame();
        }
        Console.print("숫자 야구 게임이 종료되었습니다.");
        return Console.close();
      }
    );
  }
}

const app = new App();
app.play();

module.exports = App;
