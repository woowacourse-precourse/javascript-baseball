import * as readline from "readline";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.answer = {};
  }

  play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.selectAnswerNumber();
    this.getUserGuess();
  }

  selectAnswerNumber() {
    const oneToNine = new Array(9).fill().map((_, idx) => idx + 1);
    this.answer = this.shuffle(oneToNine)
      .slice(0, 3)
      .reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
      }, {});
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5).slice(0, 3);
  }

  getUserGuess() {
    this.rl.on("line", (guess) => {
      try {
        this.checkGuessVaildation(guess);
      } catch (err) {
        console.log(err.message);
        this.rl.close();
      }
    });
    return;
  }

  checkGuessVaildation(guess) {
    if (!this.isDigits(guess)) {
      throw new Error("숫자가 아닌 문자는 입력이 불가능합니다.");
    } else if (guess.length !== 3 || this.hasSameNumber(guess)) {
      throw new Error(
        "1부터 9까지 서로 다른 수로 이루어진 3자리 숫자만 입력이 가능합니다."
      );
    } else if (this.hasZero(guess)) {
      throw new Error("0이 포함된 숫자는 입력이 불가능합니다.");
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
}

const baseballGame = new App();
baseballGame.play();

// module.exports = App;
