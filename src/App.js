const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, ERRORS } = require("./constants.js");
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.answer = null;
  }

  play() {
    this.startGame();
    this.getGuess(this.answer);
  }

  startGame() {
    Console.print(MESSAGES.APP_START);
    this.answer = this.setAnswer();
  }

  setAnswer() {
    let answer = {};
    let indexCount = 1;
    while (indexCount <= 3) {
      const digit = Random.pickNumberInRange(1, 9);
      if (!answer[digit]) answer[digit] = indexCount++;
    }
    return answer;
  }

  isValidInput(input) {
    if (!/^\d+$/.test(input)) throw new Error(ERRORS.IS_NOT_NUMBER);
    if (new Set(input).size !== 3) throw new Error(ERRORS.HAS_SAME_NUMBER);
    if (input.includes("0")) throw new Error(ERRORS.HAS_ZERO);
    if (input.length !== 3) throw new Error(ERRORS.LENGTH_IS_NOT_THREE);
    return true;
  }

  getGuess(answer) {
    Console.readLine(MESSAGES.GUESS_QUESTION, (guess) => {
      if (!this.isValidInput(guess)) return;
      const { ball, strike } = this.compare(guess, this.answer);
      this.display(ball, strike);
      if (strike !== 3) return this.getGuess(answer);
      else this.replayOrEnd();
    });
  }

  compare(guess, answer) {
    let ball = 0;
    let strike = 0;

    guess.split("").forEach((digit, index) => {
      if (answer[digit] === index + 1) strike++;
      else if (answer[digit]) ball++;
    });

    return { ball, strike };
  }

  display(ball, strike) {
    const displayed = [];

    if (ball) displayed.push(`${ball}볼`);
    if (strike) displayed.push(`${strike}스트라이크`);
    if (!ball & !strike) displayed.push("낫싱");

    Console.print(displayed.join(" "));
  }

  replayOrEnd() {
    Console.print(MESSAGES.GAME_END);
    Console.readLine(MESSAGES.REPLAY_QUESTION, (input) => {
      if (input === "1") this.play();
      else if (input === "2") Console.close();
      else throw new Error(ERRORS.ONLY_ONE_OR_TWO);
    });
  }
}

module.exports = App;
const app = new App();
app.play();
