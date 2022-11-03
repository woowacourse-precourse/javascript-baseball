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
      }
    });
    return;
  }

  checkGuessVaildation(guess) {
    if (guess.length !== 3) throw new Error("");
  }
}

const baseballGame = new App();
baseballGame.play();

// module.exports = App;
