const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGES, ERRORS } = require("./constants.js");
const { Console, Random } = MissionUtils;

class App {
  constructor() {
    this.answer = null;
    this.answerLength = null;
  }

  play() {
    Console.print(MESSAGES.APP_START);
    this.answerLength = 3;
    this.startGame(3);
  }

  startGame() {
    this.answer = this.setAnswer();
    this.getGuess();
  }

  setAnswer() {
    let answer = {};
    let indexCount = 1;

    while (indexCount <= this.answerLength) {
      const digit = Random.pickNumberInRange(1, 9);
      if (!answer[digit]) answer[digit] = indexCount++;
    }

    return answer;
  }

  isValidInput(guess) {
    if (!this.isDigits(guess)) throw new Error(ERRORS.IS_NOT_NUMBER);
    if (new Set(guess).size !== 3) throw new Error(ERRORS.HAS_SAME_NUMBER);
    if (guess.includes("0")) throw new Error(ERRORS.HAS_ZERO);
    if (guess.length !== 3) throw new Error(ERRORS.LENGTH_IS_NOT_THREE);

    return true;
  }

  isDigits(number) {
    return /^\d+$/.test(number);
  }

  // equalsLength(number) {
  //   return new Set(number).size !== 3;
  // }

  getGuess() {
    Console.readLine(MESSAGES.GUESS_QUESTION, (guess) => {
      if (!this.isValidInput(guess)) return;

      const { ball, strike } = this.compareGuessAndAnswer(guess);
      this.displayResult(ball, strike);

      strike !== 3 ? this.getGuess() : this.replayOrEnd();
    });
  }

  compareGuessAndAnswer(guess) {
    let ball = 0;
    let strike = 0;

    guess.split("").forEach((digit, index) => {
      if (this.answer[digit] === index + 1) strike++;
      else if (this.answer[digit]) ball++;
    });

    return { ball, strike };
  }

  displayResult(ball, strike) {
    const result = [];

    if (ball) result.push(`${ball}볼`);
    if (strike) result.push(`${strike}스트라이크`);
    if (!ball & !strike) result.push("낫싱");

    Console.print(result.join(" "));
  }

  replayOrEnd() {
    Console.print(MESSAGES.GAME_END);
    Console.readLine(MESSAGES.REPLAY_QUESTION, (reply) => {
      if (reply === "1") this.startGame();
      else if (reply === "2") this.endApp();
      else throw new Error(ERRORS.ONLY_ONE_OR_TWO);
    });
  }

  endApp() {
    return Console.close();
  }
}

module.exports = App;
const app = new App();
app.play();
