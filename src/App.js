const { Random, Console } = require('@woowacourse/mission-utils');

const MESSAGE = {
  WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  REPLAY_OR_QUIT: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  HIT_BALLS: '숫자를 입력해주세요 : ',
};

const SCORE = {
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
};

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
      this.#answer = App.#pickRandomNumbers(3);
    }
    this.#hitBalls();
    this.#judgeBallStrike();
    this.#showScore();
    this.#resultGame();
  }

  static #pickRandomNumbers(count) {
    const result = new Set();
    while (result.size !== count) {
      const random = Random.pickNumberInRange(1, 9);
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

    if (numbersArray.length !== 3) {
      throw new Error('numbers length must be 3.');
    }

    if (new Set(numbersArray).size !== 3) {
      throw new Error('inputValue cannot be duplicated');
    }

    if (numbersArray.filter((n) => !(n >= 1 && n <= 9)).length > 0) {
      throw new Error('inputValue cannot be grater than 9 or less than 1');
    }
  }

  #judgeBallStrike() {
    this.#initScore();
    this.balls.forEach((ball, idx) => {
      const answerIdx = this.#answer.indexOf(ball);

      if (answerIdx === -1) {
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
    if (this.score.strike === 3) {
      this.#win();
      return;
    }

    this.play('WRONG_ANSWER');
  }

  #win() {
    Console.print(MESSAGE.WIN);
    Console.readLine(MESSAGE.REPLAY_OR_QUIT, this.#replayOrQuit.bind(this));
  }
}

module.exports = App;
