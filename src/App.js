const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.answer = {};
    this.guess = null;
  }

  play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.answer = this.selectAnswerNumber();
    this.getUserGuess();
  }

  selectAnswerNumber() {
    return Random.pickUniqueNumbersInRange(1, 9, 3).reduce((acc, cur, idx) => {
      acc[cur] = idx + 1;
      return acc;
    }, {});
  }

  getUserGuess() {
    Console.readLine("숫자를 입력해주세요 : ", (guess) => {
      this.checkGuessVaildation(guess);
      this.compareAndDisplay(guess);
    });
  }

  checkGuessVaildation(guess) {
    if (!this.isDigits(guess)) {
      throw new Error("숫자가 아닌 문자는 입력이 불가능합니다.");
    }
    if (guess.length !== 3) {
      throw new Error(
        "1부터 9까지 서로 다른 수로 이루어진 3자리 숫자만 입력이 가능합니다."
      );
    }
    if (this.hasZero(guess)) {
      throw new Error("0이 포함된 숫자는 입력이 불가능합니다.");
    }
    if (this.hasSameNumber(guess)) {
      throw new Error("중복되는 숫자는 입력이 불가능합니다.");
    }
  }

  isDigits(number) {
    return /^\d+$/.test(number);
  }

  hasZero(number) {
    return number.includes("0");
  }

  hasSameNumber(number) {
    for (let index = 0; index < 3; index++) {
      if (number.indexOf(number[index]) !== number.lastIndexOf(number[index])) {
        return true;
      }
    }
    return false;
  }

  compareAndDisplay(guess) {
    let result = this.compareGuessAndAnswer(guess);
    this.displayResult(result);
    if (this.isAnswer(result.strike)) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.replayOrEnd();
    } else {
      this.getUserGuess();
    }
  }

  compareGuessAndAnswer(guess) {
    let ball = 0;
    let strike = 0;

    guess.split("").forEach((digit, index) => {
      if (this.answer[digit])
        this.answer[digit] === index + 1 ? strike++ : ball++;
    });
    return { ball: ball, strike: strike };
  }

  displayResult({ ball, strike }) {
    const displayed = [];
    if (ball) displayed.push(`${ball}볼`);
    if (strike) displayed.push(`${strike}스트라이크`);
    if (!ball & !strike) displayed.push("낫싱");
    Console.print(displayed.join(" "));
  }

  isAnswer(strike) {
    return strike == 3;
  }

  replayOrEnd() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (reply) => {
        if (reply === "1") {
          this.answer = this.selectAnswerNumber();
          this.getUserGuess();
        } else if (reply === "2") {
          Console.close();
        }
      }
    );
  }
}

module.exports = App;
const app = new App();
app.play();
