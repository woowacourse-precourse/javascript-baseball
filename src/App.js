import * as readline from "readline";

class App {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  play() {
    console.log("숫자 야구 게임을 시작합니다.");
    this.getUserGuess();
  }

  getUserGuess() {
    this.rl.on("line", (guess) => {
      try {
        checkVaildation(guess);
      } catch (err) {
        console.log(err.message);
      }
    });
    return;
  }
}

const baseballGame = new App();
baseballGame.play();

// module.exports = App;
