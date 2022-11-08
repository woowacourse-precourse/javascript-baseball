const { Random, Console } = require('@woowacourse/mission-utils');
const { MESSAGE, SCORE, RANDOM, GAME } = require('./constants');

class App {
  #answer = [];

  constructor() {
    this.balls = [];
    this.score = { ball: 0, strike: 0 };
  }

  #initScore() {
    this.score.ball = 0;
    this.score.strike = 0;
  }

  play(type) {
    if (type !== 'WRONG_ANSWER') {
      Console.print(MESSAGE.PLAY);
      this.#answer = App.#pickRandomNumbers(RANDOM.PICK_NUM);
    }
    this.#hitBalls();
    this.#judgeBallStrike();
    this.#showScore();
    this.#resultGame();
  }

  static #pickRandomNumbers(count) {
    const result = new Set();
    while (result.size !== count) {
      const random = Random.pickNumberInRange(RANDOM.MIN, RANDOM.MAX);
      result.add(random);
    }
    return Array.from(result);
  }

  #hitBalls() {
    Console.readLine(MESSAGE.HIT_BALLS, (input) => {
      this.balls = input.split('').map((e) => +e);
      App.#validateNumbers(this.balls);
    });
  }

  static #validateNumbers(numbersArray) {
    if (numbersArray.filter((n) => Number.isNaN(n)).length > 0) {
      throw new Error('inputValue must be numbers.');
    }

    if (numbersArray.length !== RANDOM.PICK_NUM) {
      throw new Error('numbers length must be 3.');
    }

    if (new Set(numbersArray).size !== RANDOM.PICK_NUM) {
      throw new Error('inputValue cannot be duplicated');
    }

    if (numbersArray.filter((n) => !(n >= RANDOM.MIN && n <= RANDOM.MAX)).length > 0) {
      throw new Error('inputValue cannot be grater than 9 or less than 1');
    }
  }

  #judgeBallStrike() {
    this.#initScore();
    this.balls.forEach((ball, idx) => {
      const answerIdx = this.#answer.indexOf(ball);
      const isNothing = answerIdx === -1;

      if (isNothing) {
        return;
      }

      if (answerIdx === idx) {
        this.score.strike += 1;
        return;
      }

      this.score.ball += 1;
    });
  }

  #showScore() {
    const result = Object.keys(this.score)
      .reduce((acc, cur) => {
        const value = this.score[cur];
        const unit = SCORE[cur];
        return acc + (value ? `${value}${unit} ` : '');
      }, '')
      .trimEnd();
    const score = result || SCORE.nothing;
    Console.print(score);
  }

  #resultGame() {
    if (this.score.strike === RANDOM.PICK_NUM) {
      this.#win();
      return;
    }

    this.play('WRONG_ANSWER');
  }

  #win() {
    Console.print(MESSAGE.WIN);
    Console.readLine(MESSAGE.REPLAY_OR_QUIT, this.#replayOrQuit.bind(this));
  }

  #replayOrQuit(input) {
    if (input === GAME.REPLAY) {
      this.play();
      return;
    }

    if (input === GAME.QUIT) {
      App.quit();
      return;
    }

    this.#win();
  }

  static quit() {
    Console.print(MESSAGE.QUIT);
    Console.close();
  }
}

module.exports = App;
