const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, ERRORS } = require("./constants.js");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.answer = null;
  }

  play() {
    Console.print(MESSAGES.APP_START);
    this.game();
  }

  game() {
    this.answer = this.setAnswer();
    this.getGuess();
  }

  setAnswer() {
    return Random.pickUniqueNumbersInRange(1, 9, 3).join("");
  }

  getGuess() {
    Console.readLine(MESSAGES.GUESS_QUESTION, (guess) => {
      if (this.isGuessValidated(guess)) {
        let { ball, strike } = this.compare(guess);
        this.display({ ball: ball, strike: strike });
        strike === 3 ? this.replayOrEnd() : this.getGuess();
      }
      return;
    });
  }

  isGuessValidated(guess) {
    if (!this.isDigits(guess)) throw new Error(ERRORS.IS_NOT_NUMBER);
    if (guess.length !== 3) throw new Error(ERRORS.LENGTH_IS_NOT_THREE);
    if (guess.includes("0")) throw new Error(ERRORS.HAS_ZERO);
    if (new Set(guess).size !== 3) throw new Error(ERRORS.HAS_SAME_NUMBER);

    return true;
  }

  compare(number) {
    let ball = 0;
    let strike = 0;

    number.split("").forEach((digit, index) => {
      if (this.answer.includes(digit)) {
        this.answer[index] === digit ? strike++ : ball++;
      }
    });

    return { ball: ball, strike: strike };
  }

  display({ ball, strike }) {
    const displayed = [];

    if (ball) displayed.push(`${ball}볼`);
    if (strike) displayed.push(`${strike}스트라이크`);
    if (!ball & !strike) displayed.push("낫싱");

    Console.print(displayed.join(" "));
  }

  replayOrEnd() {
    Console.print(MESSAGES.GAME_END);
    Console.readLine(MESSAGES.REPLAY_QUESTION, (reply) => {
      if (reply === "1") return this.game();
      else if (reply === "2") Console.close();
      else throw new Error(ERRORS.ONLY_ONE_OR_TWO);
    });
  }

  isDigits(number) {
    return /^\d+$/.test(number);
  }
}

module.exports = App;
const app = new App();
app.play();
